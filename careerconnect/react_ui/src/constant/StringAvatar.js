import stringToColor from "./StringToColor";

function stringAvatar(name) {

    const nameParts = name.split(' ')


    let initials

    if(nameParts.length === 1){
        initials = nameParts[0][0].toUpperCase()
    }else{
        initials = `${nameParts[0][0].toUpperCase()}${nameParts[1][0].toUpperCase()}`
    }


    return {
      sx: {
        bgcolor: stringToColor(name),
        
      },

      children: initials,
    };
  }


  export default stringAvatar;
