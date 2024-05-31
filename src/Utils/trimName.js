export const trimName = (name) => {
    let namearr = name.split(' ');
    if (namearr.indexOf("@") === -1) {
        return name.substring(0, name.indexOf("@"));
    } else if (namearr.indexOf(" ") >= 0) {
        return name.substring(0, name.indexOf(" "));
    } else {
        return name;
    }
};
