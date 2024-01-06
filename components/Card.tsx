import React from 'react'


interface CardProps {
    nombres: string;
}
  
  function Card({ nombres }: CardProps) {
    return (
      <div>{nombres}</div>
    );
  }
export default Card