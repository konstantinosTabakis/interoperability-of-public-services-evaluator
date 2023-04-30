import { useContext, useEffect, useState } from "react"
import SurveyContext from "../context/SurveyContext"
function Results() {

    const { results } = useContext(SurveyContext)
    const [total, setTotal] = useState(0)
    const [level, setLevel] = useState({})

    useEffect(() => {
        const {percentage, level}= calcResults(results.map(element => element.result))
        console.log(percentage);
        console.log(level);
        setTotal(percentage)
        setLevel(level)
    }, [results])

    const maturityLevels = [
        {
            level: 1,
            response: 'Poor interoperability – the digital public service cannot be considered interoperable'
        },
        {
            level: 2,
            response: 'Fair interoperability – the digital public service implements some elements of interoperability best practices'
        },
        {
            level: 3,
            response: 'Essential interoperability – the digital public service implements the essential best practices for interoperability'
        },
        {
            level: 4,
            response: 'Good interoperability – all relevant interoperability best practices are implemented by the digital public service'
        },
        {
            level: 5,
            response: 'Interoperability leading practice – the digital public service is a leading interoperability practice example for others'
        },
    ]

    const calcResults = (results) => {
        const total = results.reduce((accumulator, currentValue) => accumulator + currentValue) * 20
        const percentage= Math.floor(total / results.length)
        let level
        if (percentage < 20) {
            level = maturityLevels[0]
        } else if (percentage < 40) {
            level = maturityLevels[1]
        } else if (percentage < 60) {
            level = maturityLevels[2]
        } else if (percentage < 80) {
            level = maturityLevels[3]
        } else {
            level = maturityLevels[4]
        }
        return { percentage , level }
    }

    const getLevel = (total) => {
        console.log(total);

        if (total < 20) {
            console.log(maturityLevels[0]);
            return maturityLevels[0]
        } else if (total < 40) {
            return maturityLevels[1]
        } else if (total < 60) {
            return maturityLevels[2]
        } else if (total < 80) {
            return maturityLevels[3]
        } else {
            return maturityLevels[4]
        }
    }

    return (
        <div className='results'>
            <div className="results__container">
                <div className="results__container-card mg-t-huge">
                    <div className="data">
                        <div>
                            <h2 className="heading-primary mg-b-small "> Results</h2>
                            <h4> Maturity level {level.level}</h4>
                            <p>{level.response}</p>
                        </div>
                        <div className="total">
                            <div className="total-inner">
                                Total <br /> {total}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Results