import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import * as path from '~/config/path';

import LogoutBox from './LogoutBox';
import MenuItemLabel from './MenuItemLabel';
import { MainMenuWrapper, SidebarContent, StyledMenu } from './Styled';

import {
  ClientIcon,
  DashboardIcon,
  ForwardIcon,
  InventoryManagementIcon,
  InvoiceIcon,
  Logo,
  MasterSetupIcon,
  OrderIcon,
  PaymentReminderIcon,
  ProductIcon,
  ReportingIcons,
  ServiceInquiryIcon,
} from '../icons';
import { Text } from '../atomic';
import TransactionIcon from '../icons/TransactionIcon';

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const selectedMenu: string = pathname?.split('/')[2] ?? pathname?.split('/').pop() ?? '';
  type MenuItem = Required<MenuProps>['items'][number];

  interface MenuItemsInterface {
    label?: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    children?: MenuItem[];
    type?: 'group' | 'divider';
  }

  const menuItems: MenuItemsInterface[] | any = [
    {
      icon: <DashboardIcon />,
      label: <MenuItemLabel title={t('dashboard')} />,
      key: path.DASHBOARD,
    },
    {
      icon: <ClientIcon />,
      label: <MenuItemLabel title={t('client')} />,
      key: path.CLIENT,
    },
    {
      icon: <OrderIcon />,
      label: <MenuItemLabel title={t('order')} />,
      key: path.ORDER,
    },
    {
      icon: <ProductIcon />,
      label: <MenuItemLabel title={t('product')} />,
      key: path.PRODUCT,
    },
    {
      icon: <MasterSetupIcon />,
      label: <MenuItemLabel title={t('master_setup')} />,
      key: path.MASTER_SETUP,
    },
    {
      icon: <InvoiceIcon />,
      label: <MenuItemLabel title={t('invoice')} />,
      key: path.INVOICE,
    },
    {
      icon: <PaymentReminderIcon />,
      label: <MenuItemLabel title={t('payment_reminder')} />,
      key: path.PAYMENT_REMINDES,
    },
    {
      icon: <TransactionIcon />,
      label: <MenuItemLabel title={t('transaction')} />,
      key: path.BANKING_TRANSACTION,
    },
    {
      icon: <ServiceInquiryIcon />,
      label: <MenuItemLabel title={t('serviceInquiry')} />,
      key: path.SERVICE_INQUIRY,
    },

    {
      icon: <InventoryManagementIcon />,
      label: <MenuItemLabel title={t('inventory')} />,
      key: path.INVENTORY_MANAGEMENT,
    },
    {
      icon: <ReportingIcons />,
      label: <MenuItemLabel title={t('reporting')} />,
      key: path.REPORTING,
    },
  ];

  const onSelect = ({ key }: any) => {
    navigate(key);
  };

  return (
    <MainMenuWrapper>
      <div className='pl-2 pr-1 flex items-center gap-[10px]'>
        <Logo />
        <Text type='display' size='xs' weight='semibold' color='#182230'>
          Fishking
        </Text>
      </div>
      <SidebarContent>
        <StyledMenu
          mode='inline'
          defaultSelectedKeys={['dashboard']}
          items={menuItems}
          onClick={onSelect}
          selectedKeys={[selectedMenu]}
          expandIcon={<ForwardIcon />}
          // defaultOpenKeys={['master-setup']}
        />
      </SidebarContent>
      <LogoutBox />
    </MainMenuWrapper>
  );
};

export default Sidebar;
