import { useState, useEffect } from "react";

export const useGrid = () => {
    const [gridRow, setGridRow] = useState(5);
    const [gridCol, setGridCol] = useState(5);
    const [gridState, setGridState] = useState<boolean[]>(Array(gridRow*gridCol).fill(false));

    const [gridStates, setGridStates] = useState();
    useEffect(()=>{
       setGridState(Array(gridRow*gridCol).fill(false));
    },[gridRow, gridCol]);

    return {
        gridRow: gridRow,
        gridCol: gridCol,
        gridState: gridState,
        setGridRow: setGridRow,
        setGridCol: setGridCol,
        setGridState: setGridState,
    }
}