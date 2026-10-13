function Footer() {
  return (
    <footer className="flex min-h-[121px] items-center justify-center bg-[#141414] px-4 text-center">
      <p className="font-card text-lg text-white md:text-[25px]">
        &copy; {new Date().getFullYear()} Ashad Alam. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer