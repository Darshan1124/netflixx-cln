export default function footer00() {

    let foot={
      color:'black',
      backgroundColor:'white',
      border: '1px solid black'
    }
  
      return(
          <div className="card" style={foot}>
    <div className="card-header">
      copyrights
    </div>
    <div className="card-body">
      <blockquote class="blockquote mb-0">
        
        <p>All rights reserved</p>
        <footer className="blockquote-footer">since <cite title="Source Title">2023</cite></footer>
      </blockquote>
    </div>
  </div>
      );
      
  }