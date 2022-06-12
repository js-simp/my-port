import {useState} from 'react';
import {Pie} from '@visx/shape';
import {Group} from '@visx/group';
import {Text} from '@visx/text';
import {Connector} from '@visx/annotation';

function Summary() {

  const [active, setActive] = useState(null);

  //Investment Classes
  //RE - Real Estate , BI - Business Income, Bul - Bullion, CR-Credit,
  const asset_color = {
    'RE' : '#a3d1b3',
      'BI' : '#86bace',
      'Bul':  '#fae087',
      'CR' : '#9a26ff',
      'CRY':'#f26d5b',
      'SE' :'#fcf5e1'
} 
  const data = [
    { asset : 'RE', amount : 3600000},
    {asset : 'BI', amount : 1500000},
    {asset :'Bul', amount: 500000},
    {asset:'CR', amount : 500000},
    {asset:'CRY', amount : 900000},
    {asset:'SE', amount : 300000}
  ];

  function addOutline(data) {
    if (data.asset === active.asset){
      return 'black'
    }
    else {
      return 'none'
    }
  }

  function pathCenter(pathElem) {
    return {x:10, y : 50};
  }

  const width = 400;
  return (
    <svg width ={width} height = {width}>
      <Group top = {width/2} left = {width/2}>
        <Pie data = {data} pieValue = {(data)=> data.amount} 
        outerRadius = {width/2  -3} innerRadius = {width/2 - 30}
        cornerRadius = {3}
        padAngle = {0.005}>
          {(pie)=> {
            return pie.arcs.map((arc) =>{
              return(
              <g key= {arc.data.asset} 
              onMouseEnter = {() => setActive(arc.data)}
              onMouseLeave = {() => setActive(null)}
              >
                <path d= {pie.path(arc)} fill = {asset_color[arc.data.asset]} 
                stroke = {active ? (addOutline(arc.data)): 'none'}
                strokeWidth = {2}
                >  
                </path>
                <Connector x = {-190} y = {0} dx = {-50} dy = {-10} stroke = 'black'/>
              </g>
              )
            })
          }}
        </Pie>
        { active? (
          <>
            <Text fontSize={30} textAnchor = 'middle' fill = '#000000'>
            {`LKR ${active.amount}`}
            </Text>
          </>
        ) :(
          <>
          <Text fontSize={30} textAnchor = 'middle' fill = '#000000'>
          {`LKR ${data.reduce((acc,asset)=> acc + asset.amount, 0)}`}
          </Text>
          </>
        )}
        
      </Group>
    </svg>
  )
}

export default Summary