
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
      androidVersion: "Android",
      downloadLink: "http://h.com",
      fileSize: "19mb"
    },
    // {
    //   androidVersion: "8 and Lower",
    //   downloadLink: "",
    //   fileSize: "19mb"
    // },
    // {
    //   androidVersion: "All Version",
    //   downloadLink: "",
    //   fileSize: "19mb"
    // },

  ]

  return (
    <>
      <h1>Android</h1>
      {downloadLinks.map((value, index) => {
        return <DownloadContainer key={index} dowloadlink={value.downloadLink} name={value.androidVersion} image={searchit} filesize={value.fileSize} />
      })}</>

  )
}

export default DownloadPage