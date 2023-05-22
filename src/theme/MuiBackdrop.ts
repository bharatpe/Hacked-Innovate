export const MuiBackDropStyleOverride = {
  styleOverrides: {
    root: {
      backdropFilter: 'blur(4px)',
      animationDuration: '300ms',
      animation: 'modal-fade-enter both ease-in',
      background: 'rgba(0, 0, 0, 0.3)',
      '& .MuiPaper-root': {
        left: '10px',
        right: '10px',
        bottom: '10px',
        boxShadow: '0 1px 3px rgb(0 0 0 / 20%)',
        borderRadius: '20px',
        background: 'var(--white)',
        padding: '20px',
      },
    },
  },
};
