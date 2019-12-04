#pragma once
#ifdef WINDOWS
#include <vcclr.h>
#endif
#include <string>

using namespace std;

namespace whelk {
	class ForDebugging
	{
	public:
		ForDebugging();
		~ForDebugging(void);
		void trace(string str) const;
		void trace(int x) const;
		void traceln(string str) const;
	};
};

const whelk::ForDebugging dbg;