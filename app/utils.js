export const getApiurl = () => {
    const token = process.env.token || 'token';
    const url = process.env.url || 'Your Api url';
    // console.log('Static URL : ', process.env.url);
    // console.log('Static token : ', token);
    // return {
    //     props: {
    //         token,
    //         url,
    //     },
    // };
}