import {payments} from '@/data/payments.data'
import { DataTable } from './data-table';
import { columns } from './columns';
import { useToast } from '@/components/ui/use-toast';

async function fetchData(){
  return payments;
}

export default async function Page() {
  const data = await fetchData();
    return (
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    );
  }