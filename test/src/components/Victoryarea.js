import React from 'react'
import {VictoryArea, VictoryChart} from "victory"



function Victoryarea() {
    return (
        <div>
            <VictoryChart>
                <VictoryArea data={[
                        { x: 1, y: 2, y0: 0 },
                        { x: 2, y: 3, y0: 0 },
                        { x: 3, y: 5, y0: 0 },
                        { x: 4, y: 4, y0: 0 },
                        { x: 5, y: 6, y0: 0 }
                    ]} style={{ data: { fill: "#c43a31" } }} animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}>
                </VictoryArea>
            </VictoryChart>
        </div>
    )
}

export default Victoryarea
