// req = HTTP incoming message, res = HTTP server response
function handler(req, res) {
    //console.log("test 3--- ", res.status()) //Some functions data is being printed with console statement. No clear data is available in logs)
    res.status(200).json({ text: 'Hey' });
}
//test
export default handler;