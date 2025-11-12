import {PuffLoader} from 'react-spinners'

const Spinner = ({loading}) => {
  return (
   <>
   <PuffLoader color='oklch(62.3% 0.214 259.815)' loading={loading} size={60} cssOverride={{margin:"auto", textAlign:"center"}}/>
   </>
  )
}

export default Spinner