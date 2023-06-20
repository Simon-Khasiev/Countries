import { ShowCurrentCountry } from './components/ShowCurrentCountry'
import { CountryList } from './components/CountryList'
import { setCurrentCountry } from './redux/countries'
import { useAppDispatch } from './redux/hooks'
import { useEffect } from 'react'
import { Row } from 'antd'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const currentLocalCountry = sessionStorage.getItem('current')
    if(currentLocalCountry) dispatch(setCurrentCountry(JSON.parse(currentLocalCountry)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row
      style={{
        overflow: 'hidden',
        backgroundColor: '#001529'
      }}
      align={'middle'}
    >
      <CountryList/>
      <ShowCurrentCountry/>
    </Row>
  );
}

export default App;
