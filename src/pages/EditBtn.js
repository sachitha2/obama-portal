import React, {useEffect, useState} from 'react';
import {Button, Grid} from "@mui/material";
import PropTypes from "prop-types";

EditBtn.propTypes = {
    id: PropTypes.number,
    price: PropTypes.number,
    qty: PropTypes.number,
    onChange: PropTypes.func,
    handleDelete: PropTypes.func,
};

export default function EditBtn({price, qty, id, onChange, handleDelete}){
    const [edit,setEdit] = useState(false)
    const [val,setVal] = useState(qty)

    useEffect(()=>{
        onChange(id,val)
    },[val])
    return (
        <>
            <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","padding":"2px"}}>
                {edit ?
                    <input type={"number"} min="0" value={val} onChange={(e)=>setVal(Math.abs(parseInt(e.target.value, 10)))} /> :
                    <>{val}</>}
                <Button style={{"backgroundColor":"#7E0000","color":"#FFF","margin-top":"5px"}} onClick={()=>handleDelete(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{"height":"22px","width":"22px"}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </Button>
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","padding":"2px"}}>
            {price*val}
            <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin-top":"5px"}} onClick={()=>setEdit(i=>!i)}>Edit
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{"height":"22px","width":"22px","marginLeft":"10px"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
        </Button>
            </Grid>
        </>
    );
};