
// import { useParams } from "react-router-dom";
import searchit from '../images/searchitLogo.png'
import DownloadContainer from "../components/DownloadContainer";

const DownloadPage = () => {
  // const params = useParams()
  // useEffect(() => {
  //   console.log(params.app);
  // }, [params.app])
  const downloadLinks = [
    {
      androidVersion: "Android 10 and Above",
      downloadLink: "http://h.com",
      fileSize: "22mb"
    },
    {
      androidVersion: "Android 8 and Lower",
      downloadLink: "",
      fileSize: "19mb"
    },
    {
      androidVersion: "Any Version",
      downloadLink: "",
      fileSize: "52mb"
    },

  ]

  return (
    <>
      <h1>Android</h1>
      {downloadLinks.map((value, index) => {
        return <DownloadContainer key={index} dowloadlink={value.downloadLink} name={value.androidVersion} image={searchit} filesize={value.fileSize} />
      })}
      <section className='english buitify'>
        <h1>How to Checking Android version</h1>
        <p>1. open setting in your android phone</p>
        <p>2.click on search</p>
        <p>3.search Android version</p>
        <p>4.in the tile you will see your android version</p>
      </section>
      <section className='hausa buitify'>
        <h1>Yadda Ake dubba Android Version</h1>
        <p>1. Ka bude settings Akan android phone naka</p>
        <p>2.kadu duba icon na search(na bincike)</p>
        <p>3.kayi bin cika Android Version</p>
        <p>4.a tile din zakaga android version nake</p>
      </section>
    </>

  )
}

export default DownloadPage