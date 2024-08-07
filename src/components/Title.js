export default function Title({title = 'Lorem Ipsum Dolor', color = '#cccccc'}) {
    return (
      <div style={{ paddingLeft: '10px',  borderLeft: `10px solid ${color}`}}><h2>{title}</h2></div>
    )
  }
  