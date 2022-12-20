export  const makeDateFormat = (unixDate) => {
    const date = new Date(unixDate * 1000)

    // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = `${day}/${month}/${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    return formattedTime

    // return date.getDate()+
    //     "/"+(date.getMonth()+1)+
    //     "/"+date.getFullYear()+
    //     " "+date.getHours()+
    //     ":"+date.getMinutes()+
    //     ":"+date.getSeconds()
}

