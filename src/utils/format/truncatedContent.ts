export const truncatedContent = (title: string, maxLength: number) => {
    console.log("🚀 ~ truncatedContent ~ maxLength:", maxLength)
    if (title.length <= maxLength) return title;

    const words = title.split(" ");
    let shortened = "";

    for (let word of words) {
        if ((shortened + word).length > maxLength) break;
        shortened += word + " ";
    }

    return shortened.trim() + "...";
};