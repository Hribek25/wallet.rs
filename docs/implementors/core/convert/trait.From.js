(function() {var implementors = {};
implementors["iota_wallet"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"iota_wallet/account/enum.AccountIdentifier.html\" title=\"enum iota_wallet::account::AccountIdentifier\">AccountIdentifier</a>","synthetic":false,"types":["iota_wallet::account::AccountIdentifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"iota_wallet/account/enum.AccountIdentifier.html\" title=\"enum iota_wallet::account::AccountIdentifier\">AccountIdentifier</a>","synthetic":false,"types":["iota_wallet::account::AccountIdentifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"iota_wallet/account/enum.AccountIdentifier.html\" title=\"enum iota_wallet::account::AccountIdentifier\">AccountIdentifier</a>","synthetic":false,"types":["iota_wallet::account::AccountIdentifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"enum\" href=\"iota_wallet/account/enum.AccountIdentifier.html\" title=\"enum iota_wallet::account::AccountIdentifier\">AccountIdentifier</a>","synthetic":false,"types":["iota_wallet::account::AccountIdentifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"iota_wallet/account/struct.Account.html\" title=\"struct iota_wallet::account::Account\">Account</a>&gt; for <a class=\"struct\" href=\"iota_wallet/account/struct.AccountHandle.html\" title=\"struct iota_wallet::account::AccountHandle\">AccountHandle</a>","synthetic":false,"types":["iota_wallet::account::AccountHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"iota_wallet/error/enum.Error.html\" title=\"enum iota_wallet::error::Error\">Error</a>","synthetic":false,"types":["iota_wallet::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.63/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"iota_wallet/error/enum.Error.html\" title=\"enum iota_wallet::error::Error\">Error</a>","synthetic":false,"types":["iota_wallet::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"iota_wallet/error/enum.Error.html\" title=\"enum iota_wallet::error::Error\">Error</a>","synthetic":false,"types":["iota_wallet::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/url/2.2.1/url/parser/enum.ParseError.html\" title=\"enum url::parser::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"iota_wallet/error/enum.Error.html\" title=\"enum iota_wallet::error::Error\">Error</a>","synthetic":false,"types":["iota_wallet::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"iota_wallet/error/enum.Error.html\" title=\"enum iota_wallet::error::Error\">Error</a>","synthetic":false,"types":["iota_wallet::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"iota_wallet/stronghold/enum.Error.html\" title=\"enum iota_wallet::stronghold::Error\">Error</a>&gt; for <a class=\"enum\" href=\"iota_wallet/error/enum.Error.html\" title=\"enum iota_wallet::error::Error\">Error</a>","synthetic":false,"types":["iota_wallet::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;APIError&gt; for <a class=\"enum\" href=\"iota_wallet/error/enum.Error.html\" title=\"enum iota_wallet::error::Error\">Error</a>","synthetic":false,"types":["iota_wallet::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"iota_wallet/stronghold/enum.Error.html\" title=\"enum iota_wallet::stronghold::Error\">Error</a>","synthetic":false,"types":["iota_wallet::stronghold::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a>&gt; for <a class=\"enum\" href=\"iota_wallet/stronghold/enum.Error.html\" title=\"enum iota_wallet::stronghold::Error\">Error</a>","synthetic":false,"types":["iota_wallet::stronghold::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()