import MailOutlineIcon from '@mui/icons-material/MailOutline';

function InboxPage() {
    return(
        <div className='w-full h-screen boder-[2px] flex flex-col justify-center items-center'>
            <MailOutlineIcon fontSize='large' className='text-gray-500' />
            <h1 className='mt-5 font-bold'>You're all caught up</h1>
            <p className='text-gray-500'>You'll be notified here for @mentions, page activity, and page invites</p>
        </div>
    );
}

export default InboxPage;