import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

const Breadcrumbss = ({prod}) => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Merchandising</BreadcrumbItem>
      <BreadcrumbItem>{prod.name}</BreadcrumbItem>
    </Breadcrumbs>
  )
}
export default Breadcrumbss
