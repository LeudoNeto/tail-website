import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'; // Supondo que está usando React-Bootstrap
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx';
import MembersCarousel from './MembersCarousel';
import MembersRow from './MembersRow';

const MembersToggle = ({ title, members }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowCarousel, setShouldShowCarousel] = useState(false);

  // Função para alternar entre Carousel e Row
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Função para calcular o número de slides visíveis com base no tamanho da tela
  const calculateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1366) return 4;
    if (screenWidth >= 1024) return 3;
    if (screenWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const slidesPerView = calculateSlidesPerView();
    // Verifica se o número de members é maior que o número de slides visíveis
    setShouldShowCarousel(members.length > slidesPerView);
  }, [members]);

  return (
    <div style={{ padding: "32px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "16px" }}>
        <strong className="blue">{ title }</strong>
      </h1>

      {shouldShowCarousel ? (
        <>
          {isExpanded ? (
            <>
              <MembersRow members={members} />
              <Button
                variant="primary"
                onClick={handleToggle}
                style={{ marginTop: "16px", zIndex: 2, position: 'relative' }}
              >
                Retrair
                <RxDoubleArrowUp style={{ marginLeft: "8px" }} />
              </Button>
            </>
          ) : (
            <>
              <MembersCarousel members={members} />
              <Button
                variant="primary"
                onClick={handleToggle}
                style={{ marginTop: "16px", zIndex: 2, position: 'relative' }}
              >
                Expandir
                <RxDoubleArrowDown style={{ marginLeft: "8px" }} />
              </Button>
            </>
          )}
        </>
      ) : (
        <MembersRow members={members} />
      )}
    </div>
  );
};

export default MembersToggle;
