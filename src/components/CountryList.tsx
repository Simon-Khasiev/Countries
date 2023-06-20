import { getAllCountries, getCurrentCountry} from '../redux/countries'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import React, { useEffect } from 'react'
import type { MenuProps } from 'antd'
import { Col, Menu } from 'antd'


type MenuItem = Required<MenuProps>['items'][number]

const getItem = (key: React.Key, label: string): MenuItem => {
 return { key, label,}
}

export const CountryList = React.memo(() => {
    const {all: countries, current} = useAppSelector(store => store.countries)
    const dispatch = useAppDispatch()

    //добаление флажков в список стран
    useEffect(()=>{
        if(countries?.length){
            const li = document.querySelectorAll('li')
            li.forEach((el, i) => { 
                const icon = document.createElement('img')
                icon.src = countries[i].flags.svg
                icon.alt = countries[i].cca3
                icon.width = 20
                icon.style.marginRight = '10px'
                el.insertBefore(icon, el.firstChild)
                el.id = countries[i].cca3
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[countries?.length])
    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    const items: MenuProps['items'] = countries?.map((country) => getItem(country.cca3, country.name.common))

    const clickHandler: MenuProps['onClick'] = (e)=> {
        dispatch(getCurrentCountry(e.key))
    }
    
    return(
        <Col xs={4} sm={4} lg={3}>
            <Menu 
                items={items}
                onClick={clickHandler}
                style={{ 
                    overflowY: 'scroll',
                    height: '100vh',
                    scrollBehavior: 'smooth'
                }}
                mode="vertical"
                selectedKeys={!!current ? [current?.cca3] : []}
                theme='dark'
            />
        </Col>
    )
})
