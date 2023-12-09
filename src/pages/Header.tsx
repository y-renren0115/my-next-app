import '../app/globals.css'

const Header = () => {
  return (
  <div className="bg-gray-800 text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white mr-6">
              <span className="font-semibold text-xl">ブランド名</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-2 px-3 text-white hover:bg-gray-700 rounded"
              >
                ホーム
              </a>
              <a
                href="#"
                className="py-2 px-3 text-white hover:bg-gray-700 rounded"
              >
                サービス
              </a>
              <a
                href="#"
                className="py-2 px-3 text-white hover:bg-gray-700 rounded"
              >
                アバウト
              </a>
              <a
                href="#"
                className="py-2 px-3 text-white hover:bg-gray-700 rounded"
              >
                コンタクト
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="#"
              className="py-2 px-3 text-white hover:bg-gray-700 rounded"
            >
              ログイン
            </a>
          </div>
        </nav>
      </div>
  );
}

export default Header;