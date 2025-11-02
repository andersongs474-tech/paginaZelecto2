// app/components/Aurora.tsx
const Aurora = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[95px] overflow-hidden z-20">
      <div className="absolute top-[-20%] left-[-25%] w-[50%] h-[50%] bg-white rounded-full filter blur-[100px] animate-aurora-1"></div>
      <div className="absolute top-[20%] left-[50%] w-[40%] h-[40%] bg-pink-700 rounded-full filter blur-[80px] animate-aurora-2"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-green-500 rounded-full filter blur-[90px] animate-aurora-3"></div>
    </div>
  );
};
// esta no va a funcionar por esabilitarla en el layout, si se desea habilitar otra vez se descomenta en el layout
export default Aurora;