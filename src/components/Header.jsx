const Header = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between p-12">
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://placehold.co/40x40"
              alt="Profile picture"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-4xl font-bold">
              Launch your own online learning platform
            </h1>
          </div>
          <p className="text-lg">
            Quillow is a multi-purpose education and business template, built to
            create success for you online.
          </p>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="border-[--border] p-2 rounded-lg flex-grow"
            />
            <button className="bg-[--foreground] text-[--background] px-6 py-2 rounded-lg">
              Start learning
            </button>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <img src="https://placehold.co/24x24?text=✔️" alt="Check icon" />
              <span>Skilled and experienced coaches.</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="https://placehold.co/24x24?text=✔️" alt="Check icon" />
              <span>Supportive 1:1 coaching.</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <img
            src="https://placehold.co/400x300"
            alt="Group of people learning"
            className="rounded-lg shadow-lg"
          />
          <button className="absolute bottom-4 right-4 bg-[--primary] text-[--primary-foreground] p-4 rounded-full flex items-center space-x-2">
            <img src="https://placehold.co/24x24?text=▶️" alt="Play icon" />
            <span>Play</span>
          </button>
          <div className="absolute top-4 left-4 bg-[--accent] text-[--accent-foreground] px-4 py-2 rounded-lg">
            <span>User</span>
            <span className="font-bold">640k</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
