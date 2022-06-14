import {useState} from 'react';
import {Pie} from '@visx/shape';
import {Group} from '@visx/group';
import {Text} from '@visx/text';
import {Label, Connector} from '@visx/annotation';

function Summary(props) {
  const data = props.data;
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
 
  function addOutline(data) {
    if (data.asset === active.asset){
      return 'black'
    }
    else {
      return 'none'
    }
  }

  const width = 600;
  const pie_radius = 200;

  function pathCenter(arc) {
    let arc_center = (arc.endAngle - arc.startAngle)/2;
    let total_angle = arc_center + arc.startAngle;
    let x = pie_radius * Math.sin(total_angle)
    let y = pie_radius * Math.cos(total_angle)
    return {'x':x, 'y' : -y};
  }

  function getDx(arc) {
    let arc_center = (arc.endAngle - arc.startAngle)/2;
    let total_angle = arc_center + arc.startAngle;
    if(total_angle > 3.14){
      return -50
    }
    else {
      return 50
    }
  }

  function getDy(arc) {
    if(pathCenter(arc).y > 0) {
      return 20}
      else {
        return -20
      }
  }

  return (
    <svg width ={width} height = {width} >
      <Group top = {width/2} left = {width/2} fill = 'black'>
        <Pie data = {data} pieValue = {(data)=> data.amount} 
        outerRadius = {pie_radius  -3} innerRadius = {pie_radius - 30}
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
                <Connector x = {pathCenter(arc).x} y = {pathCenter(arc).y} 
                dx = {getDx(arc)} 
                dy = {getDy(arc)} 
                stroke = 'black'/>
                <Label title = {arc.data.asset} x = {pathCenter(arc).x + getDx(arc)}
                y = {pathCenter(arc).y + getDy(arc) } verticalAnchor = 'middle'
                horizontalAnchor = {getDx(arc) > 0 ? ('start') : ('end')}
                />
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