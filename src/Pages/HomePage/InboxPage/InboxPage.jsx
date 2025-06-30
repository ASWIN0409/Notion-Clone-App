import MailOutlineIcon from '@mui/icons-material/MailOutline';

function InboxPage() {
    return(
        <div className='w-[80vw] h-screen boder-[2px] flex mx-auto flex-col justify-center text-center items-center'>
            <MailOutlineIcon fontSize='large' className='text-gray-500' />
            <h1 className='mt-5 font-bold text-center text-[#3E3E3E] dark:text-gray-300'>You're all caught up</h1>
            <p className='text-center text-gray-500'>You'll be notified here for @mentions, page activity, and page invites</p>
        </div>
    );
}

export default InboxPage;