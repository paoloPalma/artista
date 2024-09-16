import { Outlet, useParams } from 'react-router-dom';
import DischiLayout from '../layouts/DischiLayout';
import VestitiLayout from '../layouts/VestitiLayout';

const MerchSingolWrapper = () => {

    const {id} = useParams();

  // Definisci la logica per scegliere il layout
  const isSpecialProduct = (id) => {
    // Logica per determinare se il prodotto è speciale
    const specialProductIds = ['5', '6', '7', '8', '9', '10']; // esempio
    return specialProductIds.includes(id);
  };

  const Layout = isSpecialProduct(id) ? DischiLayout : VestitiLayout;

  return (
    <Layout></Layout>
  )
}

export default MerchSingolWrapper