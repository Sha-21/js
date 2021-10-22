function switchImage()
{
  // On stock les sources
  let src1 = document.querySelector('#img1').src;
  let src2 = document.querySelector('#img2').src;
  let src3 = document.querySelector('#img3').src;
  let src4 = document.querySelector('#img4').src;
  // On les switch
  document.querySelector('#img1').src= src4;
  document.querySelector('#img2').src= src1;
  document.querySelector('#img3').src= src2;
  document.querySelector('#img4').src= src3;
}
