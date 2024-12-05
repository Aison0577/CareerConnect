

const ExposeImage = ({image})=>{
    const baseURL = 'http://localhost:8000/storage'
    const imageLink = `${baseURL}/${image}`
    console.log(imageLink);

    return imageLink
}


export default ExposeImage
