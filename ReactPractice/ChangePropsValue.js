import React from 'react';
function ChangePropsValue(props) {
let name = props.name;
function changeName(){
name = "React";
}
return (
<div>
<h1>{props.name}</h1>
<button onClick={changeName}>클릭</button>
</div>
);
};
export default ChangePropsValue;