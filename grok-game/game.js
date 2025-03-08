// game.js
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

// Game variables
let game = new Phaser.Game(config);
let currentPlayer = 1; // 1 for player 1, 2 for player 2
let tanks;
let currentTank;
let ground;
let cursors;
let fireButton;
let angleText;
let powerText;
let powerBar;
let windText;
let turnText;
let gameOver = false;
let projectile = null;
let wind = Phaser.Math.Between(-5, 5);
let angle = 45;
let power = 50;
let explosion;

function preload() {
  // Load game assets
  this.load.image(
    "sky",
    "https://cdn.glitch.global/d9c7b54e-1f9c-42cd-84a8-1d00f76bd34c/sky.png?v=1701698254425"
  );
  this.load.image(
    "ground",
    "https://cdn.glitch.global/d9c7b54e-1f9c-42cd-84a8-1d00f76bd34c/platform.png?v=1701698254425"
  );
  this.load.image(
    "tank1",
    "https://cdn.glitch.global/d9c7b54e-1f9c-42cd-84a8-1d00f76bd34c/tank1.png?v=1701698254425"
  );
  this.load.image(
    "tank2",
    "https://cdn.glitch.global/d9c7b54e-1f9c-42cd-84a8-1d00f76bd34c/tank2.png?v=1701698254425"
  );
  this.load.image(
    "bullet",
    "https://cdn.glitch.global/d9c7b54e-1f9c-42cd-84a8-1d00f76bd34c/bullet.png?v=1701698254425"
  );
  this.load.spritesheet(
    "explosion",
    "https://cdn.glitch.global/d9c7b54e-1f9c-42cd-84a8-1d00f76bd34c/explosion.png?v=1701698254425",
    { frameWidth: 64, frameHeight: 64 }
  );

  // Using placeholder images until real assets are available
  this.load.image("sky", "/api/placeholder/800/600");
  this.load.image("ground", "/api/placeholder/800/100");
  this.load.image("tank1", "/api/placeholder/50/30");
  this.load.image("tank2", "/api/placeholder/50/30");
  this.load.image("bullet", "/api/placeholder/10/10");
}

function create() {
  // Create world
  this.add.image(400, 300, "sky");

  // Create terrain
  ground = this.physics.add.staticGroup();

  // Generate a varied terrain
  let groundHeight = 550;
  for (let x = 0; x < 800; x += 50) {
    // Random height variation for terrain
    if (x > 100 && x < 700) {
      groundHeight = Phaser.Math.Between(500, 550);
    }
    ground.create(x, groundHeight, "ground").setScale(0.5).refreshBody();
  }

  // Create tanks
  tanks = this.physics.add.group();
  let tank1 = tanks.create(100, 450, "tank1");
  let tank2 = tanks.create(700, 450, "tank2");

  // Set tank properties
  tank1.setBounce(0.2);
  tank1.setCollideWorldBounds(true);
  tank1.player = 1;
  tank1.health = 100;

  tank2.setBounce(0.2);
  tank2.setCollideWorldBounds(true);
  tank2.player = 2;
  tank2.health = 100;

  // Add colliders
  this.physics.add.collider(tanks, ground);

  // Set up camera
  this.cameras.main.setBounds(0, 0, 800, 600);

  // Create UI
  angleText = this.add.text(16, 16, "Angle: 45°", {
    fontSize: "18px",
    fill: "#fff",
  });
  powerText = this.add.text(16, 44, "Power: 50%", {
    fontSize: "18px",
    fill: "#fff",
  });
  windText = this.add.text(16, 72, "Wind: " + wind, {
    fontSize: "18px",
    fill: "#fff",
  });
  turnText = this.add.text(300, 16, "Player 1 Turn", {
    fontSize: "24px",
    fill: "#fff",
  });

  // Power bar
  powerBar = this.add.rectangle(120, 60, power, 10, 0x00ff00);

  // Create input controls
  cursors = this.input.keyboard.createCursorKeys();
  fireButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  // Set current tank
  currentTank = tank1;

  // Explosion animation
  this.anims.create({
    key: "explode",
    frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 9 }),
    frameRate: 20,
    hideOnComplete: true,
  });

  // Set up physics for projectile
  this.projectileGroup = this.physics.add.group();
  this.physics.add.collider(
    this.projectileGroup,
    ground,
    projectileHitGround,
    null,
    this
  );
  this.physics.add.collider(
    this.projectileGroup,
    tanks,
    projectileHitTank,
    null,
    this
  );
}

function update() {
  if (gameOver) {
    return;
  }

  // Adjust firing angle
  if (cursors.up.isDown && angle < 90) {
    angle += 1;
    angleText.setText("Angle: " + angle + "°");
  } else if (cursors.down.isDown && angle > 0) {
    angle -= 1;
    angleText.setText("Angle: " + angle + "°");
  }

  // Adjust power
  if (cursors.right.isDown && power < 100) {
    power += 1;
    powerText.setText("Power: " + power + "%");
    powerBar.width = power;
  } else if (cursors.left.isDown && power > 10) {
    power -= 1;
    powerText.setText("Power: " + power + "%");
    powerBar.width = power;
  }

  // Fire projectile
  if (Phaser.Input.Keyboard.JustDown(fireButton) && projectile === null) {
    fire();
  }

  // Track projectile
  if (projectile && projectile.active) {
    // Apply wind effect
    projectile.body.velocity.x += wind * 0.05;
  }
}

function fire() {
  // Calculate velocity based on angle and power
  let radian = (angle * Math.PI) / 180;
  let velocityX;

  if (currentPlayer === 1) {
    velocityX = Math.cos(radian) * power * 6;
  } else {
    velocityX = -Math.cos(radian) * power * 6;
  }

  let velocityY = -Math.sin(radian) * power * 6;

  // Create projectile
  projectile = this.projectileGroup.create(
    currentTank.x,
    currentTank.y - 20,
    "bullet"
  );
  projectile.setCollideWorldBounds(true);
  projectile.body.onWorldBounds = true;
  projectile.body.world.on(
    "worldbounds",
    function (body) {
      if (body.gameObject === projectile) {
        projectileHitGround.call(this);
      }
    },
    this
  );

  // Set projectile velocity
  projectile.body.velocity.x = velocityX;
  projectile.body.velocity.y = velocityY;

  // Prevent multiple shots
  fireButton.enabled = false;
}

function projectileHitGround(projectile, ground) {
  // Create explosion
  explosion = this.add
    .sprite(projectile.x, projectile.y, "explosion")
    .setScale(0.5);
  explosion.play("explode");

  // Destroy projectile
  projectile.destroy();
  this.projectile = null;

  // Switch turns after delay
  this.time.delayedCall(1000, switchTurns, [], this);
}

function projectileHitTank(projectile, tank) {
  // Create explosion
  explosion = this.add
    .sprite(projectile.x, projectile.y, "explosion")
    .setScale(1);
  explosion.play("explode");

  // Apply damage
  tank.health -= 25;

  // Destroy projectile
  projectile.destroy();
  this.projectile = null;

  // Check if game is over
  if (tank.health <= 0) {
    let winner = tank.player === 1 ? 2 : 1;
    turnText.setText("Player " + winner + " Wins!");
    gameOver = true;

    // Show restart button
    let restartButton = this.add
      .text(350, 300, "Restart", {
        fontSize: "32px",
        fill: "#fff",
        backgroundColor: "#000",
      })
      .setInteractive()
      .on("pointerdown", () => {
        gameOver = false;
        this.scene.restart();
      });
  } else {
    // Switch turns after delay
    this.time.delayedCall(1000, switchTurns, [], this);
  }
}

function switchTurns() {
  // Switch player
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  currentTank =
    currentPlayer === 1 ? tanks.getChildren()[0] : tanks.getChildren()[1];

  // Update UI
  turnText.setText("Player " + currentPlayer + " Turn");

  // Change wind
  wind = Phaser.Math.Between(-5, 5);
  windText.setText("Wind: " + wind);

  // Reset fireButton
  fireButton.enabled = true;
}
