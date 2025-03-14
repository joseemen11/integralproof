const InvoiceIcon = (props) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Permite pasar propiedades como `className` o `style`
    >
      <path
        d="M804.58 73.14H219.44v731.43h585.14V73.14z m-73.14 658.29H292.58V146.29h438.86v585.14z"
        fill="#000"
      />
      <path
        d="M841.15 621.71v256H182.87v-256h-73.15v329.15h804.57V621.71zM512 219.43H329.14v182.86H512V219.43z m-73.14 109.71h-36.57v-36.57h36.57v36.57zM548.57 219.43h146.29v73.14H548.57zM548.57 329.14h146.29v73.14H548.57zM329.14 475.43h365.71v73.14H329.14z"
        fill="#000"
      />
      <path
        d="M329.14 585.14h365.71v73.14H329.14z"
        fill="#000"
      />
    </svg>
  );
  
  export default InvoiceIcon;
  