
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
      androidVersion: "Searchit",
      downloadLink: "https://drive.google.com/uc?export=download&id=1DTrctWDw-rMdfVOmAK0clp72v5YyC86P",
      fileSize: "35mb"
    },

  ]

  return (
    <>
      <h1>Android</h1>
      {downloadLinks.map((value, index) => {
        return <DownloadContainer key={index} dowloadlink={value.downloadLink} name={value.androidVersion} image={searchit} filesize={value.fileSize} />
      })}
    </>

  )
}

export default DownloadPage