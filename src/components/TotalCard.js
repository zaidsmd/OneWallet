import React from 'react';
import PropTypes from 'prop-types';
import '../styles/totalcard.css'
import {ArrowUp} from "iconsax-react";

TotalCard.propTypes = {
    total: PropTypes.number.isRequired ,
    lastTotal: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    template: PropTypes.string.isRequired
};


function TotalCard(props) {
    const difference = props.total - props.lastTotal;
    const analyze = ()=>{
        if (props.template ==="income"){
            if (difference < 0){
                return (
                    <span className="total__card__analyze red">
                        <ArrowUp style={{rotate: '-135deg'}} size={20}/>{-1*(difference * 100)/props.lastTotal}% vs last month
                    </span>
                )
            }else if (difference > 0){
                return (
                    <span className="total__card__analyze green">
                        <ArrowUp style={{rotate: '45deg'}} size={20}/>{(difference * 100)/props.lastTotal}% vs last month
                    </span>
                )
            }else {
                return (
                    <span className="total__card__analyze accent">
                        --% same as last month
                    </span>
                )
            }
        }else if(props.template==="spending"){
            if (difference < 0){
                return (
                    <span className="total__card__analyze green">
                        <ArrowUp style={{rotate: '-135deg'}} size={20}/>{-1*(difference * 100)/props.lastTotal}% vs last month
                    </span>
                )
            }else if (difference > 0){
                return (
                    <span className="total__card__analyze red">
                        <ArrowUp style={{rotate: '45deg'}} size={20}/>{(difference * 100)/props.lastTotal}% vs last month
                    </span>
                )
            }else {
                return (
                    <span className="total__card__analyze accent">
                        --% same as last month
                    </span>
                )
            }
        }
    }
    return (
       <div className="total__card card">
           <h3 className="total__card__title">{props.title}</h3>
           <div className="total__card__content">
               <h3 className="total__card__total">
                   ${Number(props.total).toLocaleString('en-US') }
                   {analyze()}
               </h3>
           </div>
       </div>
    );
}




export default TotalCard;