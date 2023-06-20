import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { Col, Image, Row, Space, Typography } from "antd"
import { getCurrentCountry } from "../redux/countries"
import { getCurrency } from "../utils/getCurrency"

const { Text, Title, Link } = Typography
const blue = '#1677ff'
const color = 'white'

export const Country = () => {
    const country = useAppSelector(store => store.countries.current)

    const dispatch = useAppDispatch()
    
    const currency = getCurrency(country)
    
    return (
        <Space direction="vertical"> 
            <Row 
                align={'middle'} 
                gutter={[{xs: 6, sm: 8, md: 10}, {xs: 10, sm: 12, md: 14}]}
            >
                <Col>
                    <Image 
                        style={{border: '1px solid black'}}
                        height={'auto'}
                        width={'auto'}
                        src={country?.flags.png}
                        alt={country?.flags.alt}
                    />
                </Col>
                {!!country?.coatOfArms.png &&
                    <Col>
                        <Image 
                            height={'100px'}
                            src={country?.coatOfArms.png}
                            alt={country?.flags.alt}
                        />
                    </Col>
                }
            </Row>
            <Title level={5} type="success">
                {country?.translations.rus.common.toUpperCase()}
            </Title>
            { !!country?.capital &&
                <Row 
                    gutter={[{xs: 50, sm: 50, md: 60}, {xs: 10, sm: 12, md: 14}]}
                >
                    <Col>
                        <Text 
                            style={{color}}
                        >
                            Столица:   
                        </Text>
                    </Col>
                    <Col>
                        <Text  
                            style={{color: blue}} 
                        >
                            {country?.capital}
                        </Text>
                    </Col>
                </Row>
            }
            <Row 
                gutter={[{xs: 30, sm: 30, md: 41}, {xs: 10, sm: 12, md: 14}]}
            >
                <Col>
                <Text 
                    style={{color}}
                >
                    Часть света:   
                </Text>
                </Col>
                <Col>
                    <Text 
                        style={{color: blue}} 
                    >
                        {country?.region}
                    </Text>
                </Col>
            </Row>
            { !!country?.currencies &&
                <Row
                    gutter={{xs: 57, sm: 57, md: 68}}
                >
                    <Col>
                        <Text 
                            style={{color}}
                        >
                            Валюта:   
                        </Text>
                    </Col>
                    <Col>
                        <Text 
                            style={{color: blue}}
                        >
                            {country?.currencies[currency].name}
                        </Text>
                    </Col>
                </Row>
            }
            <Row 
                gutter={[{xs: 45, sm: 45, md: 55}, {xs: 10, sm: 12, md: 14}]}
            >
                <Col>
                    <Text 
                        style={{color}}
                    >
                        Площадь:   
                    </Text>
                </Col>
                <Col>
                    <Text 
                        style={{color: blue}}
                    >
                        {country?.area} кв.км
                    </Text>
                </Col>
            </Row>
            <Row 
                gutter={{xs: 35, sm: 35, md: 45}}
            >
                <Col>
                    <Text 
                        style={{color}}
                    >
                        Население:   
                    </Text>
                </Col>
                <Col>
                    <Text 
                        style={{color: blue}}
                    >
                        {country?.population} чел.
                    </Text>
                </Col>
            </Row>
            { !!country?.borders?.length &&
                <Row 
                    gutter={{xs: 10, sm: 10, md: 15}}
                >
                    <Col>
                        <Text 
                            style={{color}}
                        >
                            Соседствующие страны:   
                        </Text>
                    </Col>
                    <Row
                        gutter={{xs: 6, sm: 8, md: 10}}
                    >
                        {
                            country?.borders?.map(neighbour => 
                                <Col key={neighbour}>    
                                    <Link 
                                        href={`#${neighbour}`}
                                    >
                                        <Text 
                                            type="success" 
                                            style={ {cursor: 'pointer'}}
                                            onClick={() => dispatch(getCurrentCountry(neighbour))}
                                        >
                                            {neighbour}
                                        </Text>
                                    </Link>
                                </Col>
                            )
                        }
                    </Row>   
                </Row>
            }
        </Space>
    )
}
