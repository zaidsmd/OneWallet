import React from 'react';
import PropTypes from 'prop-types';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import '../styles/statisticscard.css';

AreaStatisticsCard.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    lineKeys: PropTypes.array.isRequired,
    colorsArray: PropTypes.array.isRequired,
    yAxisKey: PropTypes.string.isRequired,
    xAxisKey: PropTypes.string.isRequired
}

function AreaStatisticsCard(props) {
    const max = (array) => {
        let maxS = [];
        props.lineKeys.map((key, index) => {
            maxS.push(Math.max(...array.map((object, index) => object[key])))
        })
        return Math.max(...maxS) + 500;
    }
    return (
        <div className="statistics__card card">
            <div className="statistics__card__header">
                <h3 className="statistics__card__title">
                    {props.title}
                </h3>
                <div className="statistics__card__legends">
                    {
                        props.lineKeys.map((key, index) => (
                            <div className="statistics__card__legend" key={key + index + props.colorsArray[index]}>
                                <span className="square"
                                      style={{backgroundColor: `${props.colorsArray[index]}`}}></span>
                                <span>{key}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={props.data}
                    margin={{
                        top: 0,
                        right: 20,
                        left: 20,
                        bottom: 0,
                    }}
                >
                    <defs>
                        {
                            props.lineKeys.map((lineKey, index) => (
                                <linearGradient
                                    key={lineKey + index + Math.floor(Math.random() * 1000)}
                                    id={`color${lineKey}`} x1="0" y1="0" x2="0" y2="1"
                                >
                                    <stop offset="5%" stopColor={props.colorsArray[index]} stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor={props.colorsArray[index]} stopOpacity={0}/>
                                </linearGradient>
                            ))
                        }
                    </defs>
                    <XAxis tickFormatter={tick => {
                        return tick.charAt(0).toUpperCase() + tick.slice(1).toLowerCase();
                    }}
                           dataKey={props.xAxisKey}/>
                    <YAxis tickFormatter={
                        tick => {
                            return `${new Intl.NumberFormat('en',
                                {notation: "compact", style: "currency", currency: "USD"}).format(tick)}`;
                        }
                    }
                           type="number"
                           tickCount={6}
                           dataKey={Number(props.yAxisKey).toLocaleString('en-US')}
                           domain={[0, max(props.data)]}
                    />
                    <CartesianGrid
                        strokeDasharray="3 3"
                    />
                    <Tooltip
                        contentStyle={{textTransform: "capitalize"}}
                        labelStyle={{color: "#fff"}}
                    />
                    {
                        props.lineKeys.map((key, index) => (
                            <Area
                                key={key + index}
                                type="monotone"
                                dataKey={key}
                                stroke={props.colorsArray[index]}
                                fillOpacity={1}
                                fill={`url(#color${key})`}
                            />
                        ))
                    }
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
        ;
}

export default AreaStatisticsCard;
