$(() => {
  const options = {
    root: document.querySelector('#container'),
    threshold: 1.0
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        alert('in view')
        // setTimeout(() => {
        //   $('.more-content').html(`    <p>
        //   Praesent quis accumsan purus. Maecenas dolor ipsum, aliquet rhoncus rutrum nec, convallis eu odio. Duis ipsum urna, sodales eget pulvinar sed, gravida in ex. Nullam faucibus, est cursus pretium laoreet, mi leo ullamcorper ipsum, eu fringilla purus enim eget augue. Maecenas enim ex, ullamcorper vel commodo vitae, blandit eget eros. Vestibulum et ultrices ex, ut elementum libero. Donec ac rhoncus ligula. Nam varius ac purus scelerisque dignissim. Maecenas et venenatis sapien, vitae tempus sapien. Ut laoreet risus non tristique commodo. Maecenas eu libero in nunc venenatis dapibus non vitae nunc. Aenean aliquam mollis urna ac tincidunt. Aenean vel sollicitudin odio. Morbi nec urna ornare sem egestas pulvinar.
        //   </p>

        //   <p>
        //     Praesent quis accumsan purus. Maecenas dolor ipsum, aliquet rhoncus rutrum nec, convallis eu odio. Duis ipsum urna, sodales eget pulvinar sed, gravida in ex. Nullam faucibus, est cursus pretium laoreet, mi leo ullamcorper ipsum, eu fringilla purus enim eget augue. Maecenas enim ex, ullamcorper vel commodo vitae, blandit eget eros. Vestibulum et ultrices ex, ut elementum libero. Donec ac rhoncus ligula. Nam varius ac purus scelerisque dignissim. Maecenas et venenatis sapien, vitae tempus sapien. Ut laoreet risus non tristique commodo. Maecenas eu libero in nunc venenatis dapibus non vitae nunc. Aenean aliquam mollis urna ac tincidunt. Aenean vel sollicitudin odio. Morbi nec urna ornare sem egestas pulvinar.
        //   </p>

        //   <img src="https://pbs.twimg.com/media/DbOWhofW0AAJpWn.jpg:large" />

        //   <p>
        //     Praesent quis accumsan purus. Maecenas dolor ipsum, aliquet rhoncus rutrum nec, convallis eu odio. Duis ipsum urna, sodales eget pulvinar sed, gravida in ex. Nullam faucibus, est cursus pretium laoreet, mi leo ullamcorper ipsum, eu fringilla purus enim eget augue. Maecenas enim ex, ullamcorper vel commodo vitae, blandit eget eros. Vestibulum et ultrices ex, ut elementum libero. Donec ac rhoncus ligula. Nam varius ac purus scelerisque dignissim. Maecenas et venenatis sapien, vitae tempus sapien. Ut laoreet risus non tristique commodo. Maecenas eu libero in nunc venenatis dapibus non vitae nunc. Aenean aliquam mollis urna ac tincidunt. Aenean vel sollicitudin odio. Morbi nec urna ornare sem egestas pulvinar.
        //   </p>`)
        // }, 5000)
      }
    });
  }, options);

  observer.observe(document.querySelector('#infinite-scroll-trigger'));
});

