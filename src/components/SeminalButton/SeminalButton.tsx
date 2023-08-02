import React from 'react';

interface SeminalButtonProps {
  label: string
}

const SeminalButton = ({label}: SeminalButtonProps ) => {
  return (
    <div>{label}</div>
  );
};

export default SeminalButton;
