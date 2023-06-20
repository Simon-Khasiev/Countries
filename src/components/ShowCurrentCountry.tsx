import { useAppSelector } from "../redux/hooks"
import { Col, Typography } from "antd"
import { Country } from "./Country"


export const ShowCurrentCountry = () => {
    const country = useAppSelector(store => store.countries.current)
    return (
        <Col
            offset={2}
            xs={15} sm={14} md={13} lg={12}
        >
            {
                !!country 
                    ? 
                <Country /> 
                    : 
                <Typography.Title 
                    type="danger"
                    level={3}
                > 
                    ← ВЫБЕРИ СТРАНУ 
                </Typography.Title>
            }
        </Col>
    )
}
