document.addEventListener('DOMContentLoaded', () => {
  let wrapper = document.getElementById('wrapper'),
    topLayer = wrapper.querySelector('.top'),
    bottomLayer = wrapper.querySelector('.bottom'),
    handle = wrapper.querySelector('.handle'),
    topLayerImage = topLayer.querySelector('img'),
    bottomLayerImage = bottomLayer.querySelector('img'),
    skew = 0,
    delta = 0;

  if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  wrapper.addEventListener('mousemove', (e) => {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = ((e.clientX + delta)-15) + 'px';
    topLayer.style.width = e.clientX + skew + delta + 'px';
    console.log(topLayerImage);
    console.log(bottomLayerImage);
    /* making condition based on handler position
    let HandleWithoutPX = handle.style.left.slice(0, -2);
    let HandleInNumber = parseInt(HandleWithoutPX);
    console.log(HandleInNumber);
    console.log(window.innerWidth);
    if (HandleInNumber > window.innerWidth) {
    } else {

    }
    */
  })
});
