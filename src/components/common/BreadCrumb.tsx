import { useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/Breadcrumb';
import { findMenuLabel } from '../../lib/utils';

export default function BreadCrumb() {
  const { pathname } = useLocation();
  const childLabel = findMenuLabel(pathname);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="main">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>{childLabel}</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
