// import styled, { css } from 'styled-components';

// // import { STATUS } from '~/api/enum/enum';

// interface StatusTextProps {
//   type?:
//     | 'success'
//     | 'danger'
//     | 'primary'
//     | 'info'
//     | 'warning'
//     | 'schedule'
//     | 'premium'
//     | 'invoiced'
//     | 'process'
//     | 'underPaid'
//     | '';
//   dot?: boolean;
//   color?: string;
//   background?: string;
//   text?: string;
// }

// interface IProps {
//   color?: string;
//   background?: string;
// }

// const StyledStatusText = styled.div<StatusTextProps>`
//   border-radius: 16px;
//   padding: 2px 8px;
//   display: inline;
//   font-size: 12px;
//   font-weight: 500;
//   line-height: 18px;
//   width: fit-content;
//   ${css`
//     color: ${(color: any) => color} !important;
//     background: ${(background: any) => background};
//   `}
//   ${(props: StatusTextProps) =>
//     props.type === 'danger' &&
//     css`
//       color: #b42318;
//       background-color: #fef3f2;
//       border: 1px solid #fecdca;
//       margin-right: 14px;
//     `}
// 	${(props: StatusTextProps) =>
//     props.type === 'success' &&
//     css`
//       color: #067647;
//       background-color: #ecfdf3;
//       border: 1px solid #abefc6;
//     `}
//     ${(props: StatusTextProps) =>
//     props.type === 'primary' &&
//     css`
//       color: #53389e;
//       background-color: #eef4ff;
//       border: 1px solid #c7dbff;
//     `}
// 	${(props: StatusTextProps) =>
//     props.type === 'info' &&
//     css`
//       color: #344054;
//       background-color: #f9fafb;
//       border: 1px solid #eaecf0;
//     `}
// 	${(props: StatusTextProps) =>
//     props.type === 'warning' &&
//     css`
//       color: #a15c07;
//       background-color: #fffaeb;
//       border: 1px solid #ffedb8;
//     `}
// 	${(props: StatusTextProps) =>
//     props.type === 'schedule' &&
//     css`
//       color: #dc6803;
//       background-color: #fdf2fa;
//       border: 1px solid #ffc9f1;
//     `}
// 	${(props: StatusTextProps) =>
//     props.type === 'premium' &&
//     css`
//       color: #5925dc;
//       background-color: #f4f3ff;
//       border: 1px solid #d9d6fe;
//     `};
//   ${(props: StatusTextProps) =>
//     props.type === 'invoiced' &&
//     css`
//       color: #004eeb;
//       background-color: #f9fafb;
//       border: 1px solid #eaecf0;
//     `}

//   ${(props: StatusTextProps) =>
//     props.type === 'underPaid' &&
//     css`
//       color: #b54708;
//       background-color: #fffaeb;
//       border: 1px solid #fedf89;
//     `}
// `;

// const StatusText = ({ status }: { status: string }) => {
//   const getStatusInfo: any = (status: string) => {
//     switch (status) {
//       case STATUS.NEW:
//         return { type: 'premium', text: 'New' };
//       case STATUS.DELIVERED:
//         return { type: 'success', text: 'Delivered' };
//       case STATUS.PENDING:
//         return { type: 'warning', text: 'Pending' };
//       case STATUS.SHIPPED:
//         return { type: 'schedule', text: 'Shipped' };
//       case STATUS.CANCELED:
//         return { type: 'danger', text: 'Cancelled' };
//       case STATUS.PROCESS:
//         return { type: 'process', text: 'In Process' };
//       case STATUS.INVOICED:
//         return { type: 'invoiced', text: 'Invoiced' };
//       case STATUS.ACTIVE:
//         return { type: 'success', text: 'Active' };
//       case STATUS.INACTIVE:
//         return { type: 'info', text: 'Inactive' };
//       case STATUS.PAID:
//         return { type: 'success', text: 'Paid' };
//       case STATUS.OPEN:
//         return { type: 'info', text: 'Open' };
//       case STATUS.OVERDUE:
//         return { type: 'danger', text: 'Overdue' };
//       case STATUS.OVERPAID:
//         return { type: 'premium', text: 'Overpaid' };
//       case STATUS.OUT_OF_STOCK:
//         return { type: 'danger', text: 'Out of stock' };
//       case STATUS.LOW_IN_STOCK:
//         return { type: 'warning', text: 'Low in stock' };
//       case STATUS.IN_STOCK:
//         return { type: 'success', text: 'In stock' };
//       case STATUS.LINKED:
//         return { type: 'premium', text: 'Linked' };
//       case STATUS.DISPUTED:
//         return { type: 'danger', text: 'Dispute' };
//       case STATUS.RESOLVED:
//         return { type: 'success', text: 'Resolved' };
//       case STATUS.REVIEWED:
//         return { type: 'premium', text: 'Review' };
//       case STATUS.UNDERPAID:
//         return { type: 'underPaid', text: 'Under paid' };
//       case STATUS.UNVERIFIED:
//         return { type: 'danger', text: 'Unregistered' };
//       default:
//         return '';
//     }
//   };

//   const statusText: StatusTextProps = getStatusInfo(status);

//   return <StyledStatusText type={statusText?.type}>{statusText?.text}</StyledStatusText>;
// };

// export default StatusText;
