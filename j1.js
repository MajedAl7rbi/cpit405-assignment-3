
let likes;
let images = [
    { name: 'uni', likes: 5, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Universal_Pictures_logo.svg/1200px-Universal_Pictures_logo.svg.png' },
    { name: 'bridge', likes: 3, url: 'https://i.imgur.com/Jq8GpyL.png' },
    { name: 'bus', likes: 4, url: 'https://media.cntraveler.com/photos/609efad86ed0f922b14c133a/3:4/w_1500,h_2000,c_limit/Incredible%20Suspension%20Bridges%20Around%20the%20World_Golden%20Skybridge_Photo%20credit%20Pursuit,%20Chris%20Amat_IMG_3334-3000x2001-2c58e9a3-1ba0-40a7-b6bf-4633f3e07d26.jpg' },
    { name: 'stad', likes: 9, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Old_Trafford_inside_20060726_1.jpg/800px-Old_Trafford_inside_20060726_1.jpg' }
];
images.sort(compare);
function compare(a, b) {
    if (parseInt(a.likes)  < parseInt(b.likes)) {
        return -1;
    }
    else if (parseInt(a.likes) > parseInt(b.likes)) {
        return 1;
    }
    else {
        return 0;
    }
}
for (imageItem of images) {
    let imgElem = document.createElement("img");
    imgElem.src = imageItem.url;
    document.body.append(imgElem);
}