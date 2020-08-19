import React from 'react'

const Person = person => {
	return(
		<div style={{width: "500px", height:"60px"}}>
			<div style={{width: "30%", float:"left"}}>
				<img src={person.picture.thumbnail} alt={'person'} />
			</div>
			<div style={{width: "30%", float:"left", padding: "10px"}}>
				{person.name.first}{' '}
				{person.name.last}{' '}
			</div>	
			<div style={{width: "30%", float:"left", padding: "10px"}}>{person.email}</div>
		</div>
	)
}

export default Person
