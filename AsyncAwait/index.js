var GithubApi = require('github');

var github = new GithubApi({
  version: '3.0.0'
});

function getPentaCodeAvatar() {
  return new Promise((resolve, reject) => {
    github.search.users({ q: 'pentacode' }, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      let avatarUrl = '';
      if (res.data && res.data.items) {
        avatarUrl = res.data.items[0].avatar_url;
      }
      resolve(avatarUrl);
    });
  })
}

function getReactAvatar() {
  return new Promise((resolve, reject) => {
    github.search.users({ q: 'react' }, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      let avatarUrl = '';
      if (res.data && res.data.items) {
        avatarUrl = res.data.items[0].avatar_url;
      }
      resolve(avatarUrl);
    });
  })
}

// ==========================PROMISE BASED================================
// getPentaCodeAvatar()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.error('Error in getPentaCodeAvatarFunction (Promise Based)', e);
//   });

// ==========================Async Await================================
// async function start() {
//   const avatarUrl = await getPentaCodeAvatar();
//   console.log(avatarUrl);
// }

// start();

// ======================Async Await Handle Errors========================
// async function start() {
//   try {
//     const avatarUrl = await getPentaCodeAvatar();
//     console.log(avatarUrl);
//   } catch (e) {
//     console.error('Error in getPentaCodeAvatarFunction (Async Await Based)', e);
//   }
// }

// start();

// ======================Async Await Synchronous========================
async function startSynchronous() {
  try {
    const pentaCodeAvatarUrl = await getPentaCodeAvatar();
    const reactAvatarUrl = await getReactAvatar();
    const totalURL = pentaCodeAvatarUrl + reactAvatarUrl;
    console.log(totalURL);
  } catch (e) {
    console.error('Error in startSynchronous (Async Await Based)', e);
  }
}

startSynchronous();

// ======================Async Await Parallel========================
// async function startParallel() {
//   try {
//     let [ pentaCodeAvatarUrl, reactAvatarUrl ] = await Promise.all([getPentaCodeAvatar(), getReactAvatar()]);
//     console.log(pentaCodeAvatarUrl, reactAvatarUrl)
//   } catch (e) {
//     console.error('Error in startParallel (Async Await Based)', e);
//   }
// }

// startParallel();
