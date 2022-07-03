Search.setIndex({"docnames": ["getting-started", "hacking/contrib", "hacking/hacking", "hacking/target-cortex-a", "hacking/target-cortex-m", "hacking/target-drivers", "hardware", "index", "knowledge/faq", "knowledge/links", "knowledge/terminology", "target-usage/sam3x-4x-x7x", "target-usage/stm32", "upgrade", "usage/gdb-automation", "usage/gdb-commands", "usage/platformio", "usage/semihosting", "usage/swo", "usage/traceswo"], "filenames": ["getting-started.md", "hacking/contrib.md", "hacking/hacking.md", "hacking/target-cortex-a.md", "hacking/target-cortex-m.md", "hacking/target-drivers.md", "hardware.md", "index.md", "knowledge/faq.md", "knowledge/links.md", "knowledge/terminology.md", "target-usage/sam3x-4x-x7x.md", "target-usage/stm32.md", "upgrade.md", "usage/gdb-automation.md", "usage/gdb-commands.md", "usage/platformio.md", "usage/semihosting.md", "usage/swo.md", "usage/traceswo.md"], "titles": ["Getting Started", "Contributing", "Firmware Hacking", "Cortex A Targets", "Cortex M Targets", "Adding Target Drivers", "Supported Hardware", "Black Magic Debug: The Plug&amp;Play MCU Debugger", "FAQ", "Links", "Terminology", "SAM3x-4x-x7x", "STM32 Targets", "Firmware Upgrade", "GDB Flash Automation", "GDB Commands", "PlatformIO", "Semihosting", "Serial Wire Output", "SWD - TRACESWO support"], "terms": {"If": [0, 1, 2, 4, 7, 8, 13, 14, 15, 17, 18, 19], "you": [0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 17, 18, 19], "don": [0, 1, 2, 4, 6, 8, 14], "t": [0, 1, 2, 4, 5, 6, 8, 14], "have": [0, 1, 2, 4, 5, 6, 7, 8, 12, 13, 14, 17, 18], "one": [0, 1, 3, 4, 8, 12, 14, 15, 18, 19], "alreadi": [0, 3, 12], "ll": 0, "need": [0, 1, 2, 3, 4, 6, 7, 8, 13, 14, 17, 18, 19], "s": [0, 3, 4, 5, 6, 9, 12, 13, 15, 17, 19], "usb": [0, 2, 6, 7, 8, 14, 15, 18], "port": [0, 4, 7, 8, 15, 16, 18], "mini": [0, 4, 8], "cabl": [0, 4, 7, 14], "when": [0, 2, 4, 5, 12, 13, 14, 15, 18, 19], "via": [0, 11, 14, 17], "enumer": 0, "cdc": [0, 7], "acm": [0, 7], "devic": [0, 1, 2, 3, 4, 7, 9, 13, 14, 18], "which": [0, 2, 4, 5, 7, 12, 14, 15, 18, 19], "os": [0, 7, 14, 15, 16, 18], "should": [0, 1, 2, 3, 4, 5, 6, 8, 13, 14, 15, 19], "present": [0, 15], "tty": [0, 8], "serial": [0, 4, 6, 7, 8, 9, 14, 15, 19], "On": [0, 2, 3, 8, 9, 13, 15, 18], "linux": [0, 1, 7, 9, 14, 15, 16, 19], "can": [0, 1, 2, 4, 5, 6, 7, 10, 12, 13, 14, 15, 17, 18, 19], "check": [0, 6, 14, 18], "kernel": [0, 1], "log": [0, 18, 19], "find": [0, 4, 5, 13], "wa": [0, 4, 6, 7, 19], "alloc": 0, "user": [0, 2, 4, 6, 8, 9, 17], "host": [0, 2, 4, 7, 16, 17, 18, 19], "dmesg": 0, "1": [0, 2, 4, 5, 7, 11, 12, 14, 16, 19], "new": [0, 1, 2, 4, 5, 6, 8, 12, 16], "full": [0, 6, 7, 14, 16], "speed": [0, 6, 18, 19], "number": [0, 2, 4, 14], "58": 0, "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19], "ehci": 0, "pci": 0, "found": [0, 1, 2, 4, 5, 14, 15], "idvendor": 0, "1d50": [0, 13], "idproduct": 0, "6018": [0, 13], "string": [0, 4, 15], "mfr": 0, "product": [0, 6, 19], "2": [0, 4, 8, 11, 12, 14, 18, 19], "serialnumb": 0, "3": [0, 2, 4, 7, 14, 15], "manufactur": [0, 8, 11, 12], "sphere": 0, "technolog": 0, "dde6c7c4": 0, "cdc_acm": 0, "0": [0, 8, 11, 13, 14, 18], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19], "cannot": [0, 8, 18], "do": [0, 1, 2, 4, 6, 12, 14, 17, 18, 19], "call": [0, 4, 5, 14, 17, 19], "its": [0, 4, 12], "own": [0, 7, 8], "It": [0, 3, 4, 5, 6, 10, 12, 13, 14, 15, 16, 19], "modem": 0, "ttyacm0": [0, 14, 15], "ttyacm1": [0, 18], "The": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 15, 18, 19], "first": [0, 2, 4, 6, 8, 13], "interfac": [0, 5, 6, 7, 8, 14, 15, 17], "provid": [0, 4, 5, 7, 8, 11, 12, 14, 15], "gdb": [0, 2, 4, 5, 7, 9, 11, 12, 18], "server": [0, 5, 7, 8, 13, 15], "second": [0, 4, 6, 14, 15, 18], "uart": [0, 2, 6, 18, 19], "adapt": [0, 4, 6, 7], "window": [0, 7, 15, 16, 19], "detect": [0, 2, 3, 7, 8], "two": [0, 4, 6, 8, 12, 18], "com": [0, 2, 3, 5, 16, 18, 19], "extend": [0, 7, 8, 14, 15, 19], "remot": [0, 7, 8, 14, 15], "back": [0, 4, 6], "board": [0, 4, 7, 8, 10, 15, 16], "To": [0, 2, 4, 5, 7, 14, 17, 18], "manag": [0, 4, 13, 16, 17, 18], "note": [0, 1, 4, 11, 12, 14, 19], "For": [0, 4, 5, 6, 8, 12, 14, 15, 18], "older": 0, "version": [0, 6, 12, 13, 14, 15, 18, 19], "7": [0, 4, 8, 11], "prompt": 0, "instal": [0, 7, 13, 16, 18], "driver": [0, 3, 7, 13, 18], "download": [0, 13], "here": [0, 4, 6, 7, 8, 12, 14, 19], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 18, 19], "10": [0, 4, 8, 11, 18, 19], "want": [0, 6, 15], "upgrad": [0, 2, 7, 9], "firmwar": [0, 4, 6, 7, 9, 10, 12, 14, 15, 17, 19], "itself": [0, 8, 17, 18], "libusbk": 0, "give": [0, 4, 7, 14, 19], "access": [0, 4, 5, 6], "dfu": [0, 2, 4, 7, 9], "allow": [0, 6, 8, 15, 18, 19], "util": [0, 4, 9, 18], "onli": [0, 2, 3, 4, 5, 8, 11, 14, 18, 19], "plan": [0, 3], "also": [0, 2, 4, 6, 7, 8, 10, 13, 14, 15, 19], "displai": [0, 15], "bmp": [0, 2, 3, 4, 6, 7, 9, 10, 13, 14, 15], "gener": [0, 3, 4, 5, 6, 12, 15, 19], "titl": 0, "seen": 0, "below": [0, 4], "an": [0, 2, 4, 6, 7, 13, 14, 15, 16, 18, 19], "arm": [0, 2, 4, 6, 7, 8, 9, 12, 14, 16, 17, 19], "cross": [0, 2, 7, 16], "toolchain": [0, 4, 7, 9, 14], "debug": [0, 4, 5, 6, 8, 9, 10, 12, 13, 17, 19], "embed": [0, 2, 4, 7, 9, 16, 19], "applic": [0, 7, 8, 10, 17, 19], "gcc": [0, 2, 4, 7, 9, 14], "recommend": [0, 12, 13], "includ": [0, 2, 5, 6, 7, 8, 13, 15, 18, 19], "gnu": [0, 7, 9, 14], "debugg": [0, 4, 6, 8, 9, 10, 18, 19], "none": [0, 2, 12, 14], "eabi": [0, 2, 12, 14], "tool": [0, 2, 4, 6, 7, 8, 9, 16], "processor": [0, 4, 6, 15], "6": [0, 8, 11], "20140228": 0, "cv": 0, "copyright": [0, 1], "c": [0, 3, 4, 5, 7, 8, 12, 14, 15, 17, 18], "2013": 0, "free": [0, 7, 11, 12], "foundat": 0, "inc": 0, "licens": [0, 2], "gplv3": [0, 2], "gpl": 0, "later": [0, 12, 19], "http": [0, 2, 3, 5, 19], "org": 0, "html": 0, "chang": [0, 1, 3, 11, 12, 13, 14, 15, 19], "redistribut": 0, "There": [0, 4, 5, 6, 8, 14, 15, 18], "NO": 0, "warranti": 0, "extent": 0, "permit": 0, "law": 0, "type": [0, 2, 4, 14, 15, 18], "show": [0, 11, 18, 19], "copi": 0, "detail": [0, 1, 2, 8, 16, 18], "configur": [0, 3, 4, 7, 11, 15, 18], "i686": 0, "target": [0, 1, 2, 10, 11, 14, 17, 19], "bug": 0, "report": [0, 8, 13, 15], "instruct": [0, 2, 6, 7, 8, 13, 15, 19], "pleas": [0, 1, 2, 7, 8, 13, 14, 16, 19], "see": [0, 4, 7, 8, 11, 13, 16, 18, 19], "www": 0, "protocol": [0, 7, 8, 9, 14, 18], "implement": [0, 3, 6, 7, 8, 14, 19], "over": [0, 1, 7, 9, 12, 16, 18, 19], "follow": [0, 1, 2, 4, 6, 7, 8, 12, 13, 14, 16], "command": [0, 2, 7, 8, 12, 13, 14, 16, 18], "dev": [0, 2, 5, 8, 14, 15, 18], "monitor": [0, 2, 4, 6, 7, 11, 12, 14, 15, 18], "jtag_scan": [0, 5, 14, 15], "voltag": [0, 6, 8, 15], "4v": 0, "ir": [0, 5], "len": [0, 5], "idcod": [0, 5], "descript": [0, 6], "4": [0, 4, 19], "0x4ba00477": 0, "limit": [0, 3, 6, 8], "adiv5": [0, 3, 8], "jtag": [0, 4, 6, 7, 14, 15, 18, 19], "dp": [0, 15], "5": [0, 8, 11, 14], "0x06413041": 0, "st": [0, 2, 4, 7, 9, 10, 16], "microelectron": [0, 8], "stm32f4xx": 0, "avail": [0, 4, 7, 14, 19], "No": [0, 7], "att": 0, "attach": [0, 3, 4, 6, 7, 14], "0x080071b2": 0, "swdp_scan": [0, 4, 7, 14, 15], "mai": [0, 1, 3, 6, 12, 13, 15, 18, 19], "wire": [0, 7, 8, 19], "instead": [0, 7, 10, 14], "onc": [0, 4, 8, 12, 13], "all": [0, 1, 2, 4, 6, 7, 8, 13, 14, 15, 18], "standard": [0, 1, 2, 7, 17], "control": [0, 2, 7], "execut": [0, 4, 5, 7, 15, 17], "quick": 0, "introduct": [0, 15], "mac": [0, 7, 14], "x": [0, 7, 8, 12, 14, 15], "cu": [0, 14, 15], "usbmodem": [0, 14], "somenumb": 0, "freez": 0, "tri": 0, "By": [0, 15], "default": [0, 2, 6, 8, 11, 12, 15, 16, 18], "vcc": 0, "enabl": [0, 4, 11, 12, 14, 19], "either": [0, 1, 2, 4, 8], "swd": [0, 4, 6, 7, 14, 15, 18], "prevent": [0, 4, 6, 12], "conflict": 0, "between": [0, 8, 14, 18], "multipl": [0, 8, 12, 14, 16, 18], "power": [0, 6, 8, 13, 14, 15], "must": [0, 4, 5, 15, 18], "tpwr": [0, 4, 8, 14, 15], "com10": [0, 15], "add": [0, 4, 5, 6, 8, 14, 17], "prefix": [0, 2, 14], "exampl": [0, 4, 7, 8, 9, 10, 12, 14, 15, 18, 19], "com3": [0, 15], "safe": 0, "alwai": [0, 5, 14], "even": [0, 4, 6, 8], "so": [0, 1, 2, 3, 4, 8, 19], "write": [0, 4, 5, 12, 14, 17, 18, 19], "script": [0, 7, 12, 13, 14, 18], "just": [0, 4, 8, 15], "esden": [0, 1, 7], "creat": [0, 4, 8, 14, 15, 16], "walk": 0, "through": [0, 4, 6, 7, 15], "1bitsi": [0, 8, 14], "microcontrol": [0, 3, 7, 8, 9], "addit": [0, 4, 5, 6, 8, 14], "resourc": [0, 4], "let": [0, 7, 8, 14], "know": [0, 7, 8], "we": [0, 1, 8, 14], "them": [0, 4, 11, 12, 14, 15], "basic": [0, 4, 5, 19], "unix": [0, 7, 14], "program": [0, 4, 6, 7, 8, 9, 16], "m3": [0, 2, 8], "libopencm3": [0, 2, 9, 16], "readm": [0, 2, 7], "worth": [0, 4], "read": [0, 4, 5, 12, 17], "join": [1, 7], "discord": [1, 8, 13], "channel": [1, 8, 18], "mail": [1, 8, 16], "list": [1, 5, 6, 8, 16, 18], "edit": [1, 16], "wiki": 1, "code": [1, 3, 4, 8, 12, 13, 15, 18, 19], "style": [1, 19], "submit": 1, "github": [1, 2, 3, 5, 7, 8, 9, 13, 19], "pull": [1, 6, 8, 14], "request": [1, 8], "maintain": 1, "project": [1, 8, 9, 10, 14, 15, 16], "dragonmux": 1, "deupti": 1, "answer": [1, 16], "ani": [1, 2, 4, 5, 6, 8, 12, 15, 18], "question": [1, 4, 7, 16], "regard": [1, 13], "process": [1, 4, 14], "contact": [1, 8, 16], "everi": [1, 4, 15, 18], "ha": [1, 3, 4, 6, 12, 14, 18, 19], "build": [1, 4, 7, 8, 13, 14, 16, 17, 18], "pass": [1, 4, 5, 18], "test": [1, 2, 7, 14], "top": [1, 2, 4, 6], "main": [1, 4, 6, 7, 8, 12, 15], "branch": [1, 12], "befor": [1, 4, 12, 14], "merg": [1, 8], "requir": [1, 2, 4, 7], "review": 1, "from": [1, 3, 5, 6, 7, 11, 14, 17, 18, 19], "becaus": [1, 4, 6, 8, 15, 19], "possibl": [1, 3, 6, 8], "hardwar": [1, 10], "platform": [1, 2, 4, 6, 10, 13, 16], "specif": [1, 3, 4, 5, 7, 8, 11, 12], "approv": 1, "non": [1, 4, 12, 19], "trivial": [1, 8], "support": [1, 2, 3, 5, 10, 11, 12, 13, 14, 17, 18], "ad": [1, 2, 3, 6, 8, 14], "id": [1, 4, 8, 14, 15, 16, 19], "switch": [1, 6, 13, 18], "statement": [1, 4], "without": [1, 6, 13, 14, 18, 19], "optimist": 1, "mean": [1, 4, 6, 7, 8], "unless": [1, 4], "signific": [1, 3], "issu": [1, 4, 6, 8, 13], "try": [1, 4, 8], "assum": [1, 2, 14], "thei": [1, 4, 5, 6, 8], "100": [1, 6], "correct": [1, 2, 14], "nitpicki": 1, "about": [1, 4, 15], "That": [1, 4, 8], "said": 1, "comment": [1, 14], "guidanc": 1, "futur": [1, 12], "save": 1, "time": [1, 3, 4, 12, 14, 15, 19], "down": [1, 13, 14], "road": 1, "repetit": 1, "low": [1, 6, 8, 17, 19], "qualiti": 1, "result": [1, 2, 7, 8], "your": [1, 2, 6, 7, 8, 13, 14, 17, 18, 19], "being": [1, 4, 8], "ignor": [1, 19], "close": [1, 17], "best": [1, 7], "improv": [1, 6, 19], "match": [1, 4, 5, 8, 14], "our": [1, 7, 13, 16], "exist": [1, 11, 12], "appear": [1, 2, 4, 12, 13], "ask": [1, 13], "volunt": 1, "approach": 1, "someon": [1, 4], "directli": [1, 5, 6, 7], "base": [1, 4, 5, 6, 7, 8], "git": [1, 2], "histori": [1, 2], "affect": 1, "further": [1, 7, 16], "conform": 1, "anyth": [1, 7, 8], "stupid": 1, "author": 1, "becom": [1, 4, 7], "orphan": 1, "reason": [1, 12], "take": [1, 4, 7, 11, 14, 19], "current": [1, 3, 5, 6, 11, 12, 15], "banner": 1, "file": [1, 2, 4, 8, 12, 13, 14, 15, 16, 17, 18], "featur": [1, 3, 4, 6, 7], "black": [2, 4, 10, 11, 12, 13, 14, 16, 19], "magic": [2, 4, 10, 11, 12, 13, 14, 16, 19], "under": [2, 4, 8, 15], "open": [2, 6, 8, 9, 16, 17], "contribut": [2, 8], "compat": [2, 4, 6, 8, 16, 18], "design": [2, 6, 7, 8, 19], "repositori": [2, 4, 13], "cc": 2, "BY": 2, "sa": 2, "resid": 2, "clone": [2, 13], "fork": [2, 18, 19], "desir": 2, "method": [2, 5], "typic": [2, 4, 12], "recurs": 2, "blackmag": [2, 3, 5, 6, 8, 13, 16, 19], "submodul": 2, "paramet": [2, 4, 14, 15], "abov": [2, 4, 14, 15, 19], "initi": [2, 4, 18], "out": [2, 4, 12, 14, 18, 19], "locm3": 2, "cd": [2, 13, 14], "path": [2, 14], "init": [2, 18], "run": [2, 4, 6, 7, 8, 10, 13, 14, 15, 18], "make": [2, 4, 5, 6, 7, 8, 12, 14, 17, 19], "level": [2, 4, 6, 8, 12, 14, 17], "directori": [2, 4, 15, 18], "cortex": [2, 5, 6, 7, 8, 9, 19], "A": [2, 4, 5, 7, 8, 18, 19], "good": [2, 6, 15, 19], "option": [2, 3, 4, 6, 8, 18], "makefil": [2, 4], "Then": [2, 4, 8, 12, 14], "some": [2, 3, 4, 5, 6, 8, 11, 12, 14, 19], "other": [2, 3, 4, 6, 8, 10, 14, 15, 19], "overrid": 2, "line": [2, 3, 4, 6, 7, 9, 14, 15, 18], "like": [2, 4, 7, 8, 10, 12, 13, 14, 15, 16, 18], "e": [2, 12, 17, 18], "g": [2, 12, 17, 18], "cross_compil": 2, "cortexm3": 2, "binari": [2, 6, 7, 13, 14, 15, 18], "elf": [2, 4, 12, 14], "probe": [2, 4, 5, 7, 9, 10, 11, 12, 13, 14, 16, 19], "bin": [2, 4, 12, 13, 14], "flat": [2, 6, 8], "load": [2, 4, 7, 12, 14], "0x8002000": 2, "blackmagic_dfu": 2, "bootload": [2, 7, 8, 9, 13], "0x8000000": 2, "repo": 2, "md": [2, 7], "stlinkv2": [2, 6, 7], "probe_host": [2, 7], "stlink": [2, 7, 9], "st_bootload": [2, 7], "replug": [2, 8], "bootlaod": 2, "jeanthom": 2, "sid": 2, "price": 2, "wrote": 2, "step": [2, 4, 7], "guid": [2, 16], "describ": [2, 4, 17], "how": [2, 5, 6, 19], "set": [2, 5, 7, 8, 14, 16, 18, 19], "up": [2, 3, 5, 6, 13, 14, 15, 18, 19], "cygwin": 2, "recent": [2, 6], "ftdi": [2, 7], "mpsse": [2, 6], "jlink": [2, 7], "cmsi": [2, 9, 16], "dap": [2, 9], "easiest": [2, 14], "wai": [2, 4, 5, 6, 7, 11, 12, 13, 14, 17, 19], "v": 2, "info": [2, 15], "print": [2, 4, 6, 14, 15], "termin": [2, 4, 8, 14], "argument": [2, 4, 15], "bitmask": 2, "31": 2, "veri": [2, 4, 8, 12, 14], "verbos": 2, "succe": [2, 4], "last": [2, 8], "resort": 2, "enable_debug": [2, 4], "debug_bmp": [2, 4, 15], "screen": [2, 17], "ttyacm2": 2, "115200": 2, "exit": [2, 14], "session": [2, 4, 7, 16], "crt": 2, "ctl": 2, "section": [2, 4, 7, 8, 12, 13, 14, 15], "remov": [2, 4, 8], "trail": 2, "whitespac": 2, "rebas": 2, "fix": [2, 3, 4, 5, 8], "src": [2, 3, 4, 5], "all_platform": 2, "As": [2, 4, 8, 12, 14, 18], "long": [2, 4], "patch": 2, "appli": [2, 5], "error": [2, 14, 15], "omiss": 2, "earlier": [2, 18], "yet": [2, 6, 8], "consid": [2, 7, 8], "rewrit": 2, "i": [2, 4, 5, 17, 19], "place": [2, 6], "captur": [3, 19], "discuss": [3, 8], "gitter": 3, "armv7": [3, 5, 8, 17], "littl": [3, 6, 8], "zynq": [3, 8], "7000": [3, 8], "armv8": 3, "common": [3, 8, 15], "mani": [3, 4, 6, 8, 11, 12, 14], "differ": [3, 4, 5, 6, 12, 14, 18, 19], "These": [3, 4, 5, 6, 15], "variant": [3, 7, 15], "correctli": 3, "a5": 3, "a7": [3, 8], "a8": 3, "a9": [3, 8], "blackspher": 3, "blob": [3, 5], "master": [3, 5, 12], "l202": 3, "bit": [3, 4, 6, 8, 19], "than": [3, 5, 6, 7, 8, 14, 19], "cach": 3, "length": [3, 4, 5, 8, 12], "cortexa": [3, 5], "l77": 3, "reset": [3, 4, 6, 8, 11, 14, 15], "l555": 3, "been": [3, 4, 14], "dual": [3, 6, 8], "core": [3, 8, 15], "raspberri": [3, 16], "pi": [3, 16], "v2": [3, 7, 8, 9, 14, 15], "quad": [3, 8], "success": [3, 8, 13, 14], "smp": 3, "singl": [3, 4, 18, 19], "stage": 3, "speak": [3, 18], "re": [3, 13, 17], "interest": 3, "big": 3, "challeng": 3, "varieti": 3, "With": [3, 6, 17], "m": [3, 5, 7, 8, 9, 12, 17, 19], "easi": [3, 7, 8], "memori": [3, 4, 5, 7, 12], "map": [3, 4], "flash": [3, 6, 7, 9, 11, 12, 15], "particular": [3, 12, 15, 19], "often": [3, 6], "extern": 3, "significantli": 3, "more": [3, 4, 6, 7, 14, 15, 18, 19], "straight": 4, "forward": 4, "page": [4, 8, 11, 12, 13, 15, 19], "collect": [4, 8, 14], "taken": 4, "while": [4, 8, 13, 14, 15], "convent": 4, "sourc": [4, 6, 8, 9, 12, 13, 15, 16, 18], "referenc": 4, "dot": 4, "written": [4, 9, 12, 18], "name": [4, 10, 14, 15], "obviou": 4, "micro": [4, 6], "stm32f1": [4, 5, 8], "seri": [4, 12, 19], "defin": [4, 5, 12], "exactli": [4, 5], "global": 4, "visibl": 4, "function": [4, 5, 7, 8, 11, 15, 17, 19], "_probe": 4, "prototyp": 4, "bool": [4, 5], "data": [4, 5, 18, 19], "declar": 4, "static": [4, 5], "avoid": 4, "collis": 4, "modifi": 4, "three": [4, 14], "part": [4, 12], "definit": [4, 5, 12], "cortexm": [4, 5], "where": 4, "form": [4, 6, 7], "sequenc": 4, "third": 4, "target_intern": [4, 5], "h": [4, 5], "updat": [4, 7, 8, 13, 16], "compon": 4, "compil": [4, 6, 7, 10, 13], "probabl": [4, 12], "launchpad": [4, 7], "net": 4, "variabl": [4, 14, 15], "prior": 4, "coupl": 4, "syntax": 4, "bash": 4, "shell": [4, 14], "export": 4, "latter": 4, "connect": [4, 6, 7, 14, 18], "messag": [4, 6, 14, 15, 19], "mon": 4, "altern": [4, 13, 14, 15], "connector": [4, 6], "pin": [4, 6, 8, 14, 18, 19], "anoth": 4, "who": 4, "semi": 4, "direct": [4, 5], "particularli": 4, "difficult": [4, 14], "unwieldli": 4, "start": [4, 5, 6, 7, 12, 19], "go": [4, 17], "sclk": 4, "gnd": 4, "picoblad": [4, 6, 8], "chip": [4, 6, 8, 9, 12, 19], "unit": 4, "push": 4, "1bitsquar": [4, 6, 7, 8], "red": [4, 8], "plug": [4, 8, 13], "green": 4, "9": 4, "purpl": 4, "8": [4, 11, 12, 13, 18, 19], "simpli": [4, 18], "evalu": [4, 6], "output": [4, 6, 12, 15, 17, 19], "import": [4, 14], "thing": 4, "identifi": 4, "whether": [4, 19], "talk": [4, 8], "recogn": 4, "final": 4, "pointer": [4, 5], "structur": [4, 5], "point": 4, "routin": 4, "eras": [4, 5, 15], "target_mem_read32": [4, 5], "target_mem_write32": 4, "word": [4, 14, 19], "address": [4, 5, 6, 8, 12, 15, 19], "space": [4, 8], "put": [4, 8, 14], "protect": [4, 12], "mode": [4, 7, 11, 13, 14, 19], "regist": [4, 5, 7, 8, 15, 18], "chipid": 4, "document": [4, 5, 7, 11, 12, 14, 16, 17], "sheet": [4, 8], "refer": [4, 8, 10, 18], "manual": [4, 8, 14, 15], "what": [4, 14, 18], "inform": [4, 15], "contain": [4, 7, 13, 19], "confirm": 4, "someth": [4, 8, 14], "decod": [4, 6], "accord": [4, 5, 6], "datasheet": 4, "locat": [4, 15], "size": [4, 5, 12], "each": [4, 5, 6, 14, 19], "discontinu": 4, "region": 4, "target_add_ram": [4, 5], "chunk": 4, "byte": [4, 5, 6, 8, 12, 19], "did": 4, "tell": [4, 14], "programm": [4, 6, 9, 12], "readonli": 4, "tend": 4, "slightli": [4, 6], "segment": 4, "sector": [4, 5], "given": 4, "same": [4, 6, 8, 18], "popul": [4, 12], "target_flash": [4, 5], "member": 4, "blocksiz": [4, 5], "smallest": 4, "individu": [4, 7], "sai": 4, "8k": 4, "8192": 4, "256": 4, "finish": [4, 14], "off": [4, 7, 8, 14, 15, 19], "local": 4, "state": 4, "next": [4, 7, 12, 18], "simplest": 4, "intern": 4, "target_flash_write_buff": [4, 5], "done": [4, 5, 7, 12, 14], "target_flash_done_buff": [4, 5], "now": [4, 6, 8], "valu": [4, 5, 8, 11], "bufsiz": 4, "writabl": 4, "depend": [4, 13], "field": [4, 5], "0xff": [4, 12], "buffer": [4, 5, 6], "boundari": 4, "target_add_flash": [4, 5], "accept": 4, "would": [4, 7, 12, 14, 19], "invok": [4, 12], "command_": 4, "help": [4, 8, 12, 15, 18], "count": 4, "vector": 4, "tc_printf": 4, "return": [4, 5], "usag": [4, 12, 19], "fail": [4, 12, 13, 14], "fals": [4, 5], "true": [4, 5, 14], "fill": [4, 5], "target_": 4, "potenti": 4, "decid": 4, "come": [4, 8], "extra": 4, "care": 4, "after": [4, 11, 14, 15], "lose": 4, "detach": [4, 7, 13], "assert": 4, "suppos": 4, "happen": [4, 8, 12], "known": [4, 5, 6, 8, 13, 15], "srst": [4, 15], "cortexm_topt_inhibit_srst": 4, "target_opt": 4, "normal": [4, 6, 15], "platform_srst_set_v": 4, "caus": 4, "lost": 4, "dure": 4, "situat": 4, "aris": 4, "continu": [4, 7], "atmel": [4, 8, 16], "sam": [4, 8, 16], "sort": 4, "problem": [4, 8], "complet": [4, 15], "work": [4, 5, 6, 7, 8, 14, 16, 18], "extended_reset": 4, "null": 4, "sysresetreq": 4, "poll": 4, "releas": [4, 13], "fresh": 4, "lot": [4, 8, 11, 12], "bring": 4, "strategi": 4, "well": [4, 5, 7, 14, 16], "proce": [4, 7], "verifi": [4, 15], "ot": 4, "abl": [4, 7, 19], "trickier": 4, "techniqu": [4, 14], "simpl": [4, 14, 19], "const": [4, 5, 12], "unint8_t": 4, "arrai": 4, "recogniz": 4, "inspect": [4, 15], "arriv": 4, "intact": 4, "compar": [4, 12, 14, 15], "dump": [4, 15, 19], "filenam": [4, 15], "addr1": 4, "addr2": 4, "might": [4, 13, 18, 19], "mem": [4, 5, 8, 15], "0x0": 4, "0x2000": 4, "interrupt": [4, 15], "At": 4, "quit": [4, 8], "minim": 4, "blinker": 4, "toggl": 4, "led": [4, 6], "gpio": [4, 8], "oscilloscop": 4, "readi": [4, 14], "begin": [4, 15], "stop": [4, 19], "breakpoint": [4, 7, 15], "runnabl": 4, "blinki": 4, "hit": 4, "break": [4, 7, 13, 14, 15], "cont": 4, "resum": 4, "posit": 4, "across": 4, "printf": [4, 14, 17, 19], "respect": [4, 5], "ve": 4, "placehold": 5, "cut": [5, 13], "past": 5, "text": [5, 15, 16], "until": [5, 15], "chanc": 5, "real": 5, "public": 5, "noth": 5, "outsid": [5, 8, 15], "header": [5, 6, 8], "conveni": [5, 14, 19], "handler": 5, "idmask": 5, "respons": [5, 14], "instanti": 5, "target_new": 5, "dr": 5, "void": [5, 17], "jtag_dev_write_ir": 5, "jtag_dev_t": 5, "uint32_t": [5, 12], "jtag_dev_shift_dr": 5, "uint8_t": 5, "dout": 5, "din": 5, "int": [5, 8], "tick": 5, "tabl": [5, 11], "coresight": 5, "cidr": 5, "pidr": 5, "rom": [5, 8, 11, 12], "ap": 5, "appropri": [5, 19], "armv6": [5, 8, 17], "vendor": [5, 6, 7, 8], "otherwis": [5, 14], "doe": [5, 6, 7, 15, 18, 19], "struct": 5, "target_addr": 5, "block": [5, 12], "size_t": 5, "flash_erase_func": 5, "align": [5, 12], "flash_write_func": 5, "pad": [5, 6], "flash_done_func": 5, "end": [5, 6, 14, 19], "oper": [5, 6, 8, 12, 14], "few": [5, 8, 14], "pattern": 5, "practic": 5, "mmio": 5, "eg": 5, "kineti": [5, 8, 16], "layer": 5, "packet": [5, 19], "whole": [5, 10], "sequenci": 5, "stm32l0": [5, 8], "stub": 5, "payload": 5, "sequenti": 5, "lpc": [5, 16, 18], "nxp": [5, 8, 16, 19], "built": [5, 8, 9, 10, 14], "publish": [5, 19], "mechan": 5, "lpc11xx": [5, 8], "model": 5, "effici": 5, "assign": [5, 19], "left": [5, 19], "zero": [5, 16], "buf_siz": 5, "write_buf": 5, "skeleton_flash_eras": 5, "f": [5, 8], "addr": 5, "skeleton_flash_writ": 5, "dest": 5, "skeleton_add_flash": 5, "calloc": 5, "sizeof": 5, "skeleton_flash_bas": 5, "skeleton_flash_s": 5, "skeleton_blocks": 5, "skeleton_prob": 5, "skeleton_devid_addr": 5, "skeleton_devid": 5, "els": [5, 14], "short": [6, 14], "offici": [6, 7, 8, 16], "revis": 6, "todo": 6, "photo": 6, "statu": [6, 11], "activ": 6, "schemat": 6, "larger": 6, "factor": 6, "previou": 6, "accommod": 6, "tqfp": 6, "mcu": [6, 9], "packag": [6, 13], "aux": 6, "predecessor": 6, "relev": 6, "legaci": 6, "bmpm_v2_1c_schemat": 6, "pdf": 6, "bmpm_v2_1e_schemat": 6, "replac": 6, "txs0108": 6, "bidirect": 6, "shifter": [6, 8, 14], "suppli": [6, 8], "74lvc2t45": 6, "bu": [6, 19], "transceiv": [6, 8], "drive": [6, 14], "strength": 6, "expand": 6, "rang": [6, 8, 11, 19], "8v": 6, "5v": [6, 8], "3v": [6, 15], "dedic": [6, 10, 19], "mosfet": 6, "circuitri": 6, "10k": 6, "ensur": 6, "drain": 6, "rst": 6, "expos": 6, "side": [6, 8, 14, 17], "easier": [6, 13], "much": 6, "pinout": 6, "increas": 6, "distanc": 6, "better": [6, 19], "visual": 6, "separ": [6, 19], "1e": 6, "jumper": 6, "traceswo": [6, 7, 18], "signal": 6, "uart1_rx": 6, "pb7": 6, "highest": 6, "order": [6, 7, 8], "bmpm": [6, 14], "store": [6, 12], "data0": 6, "0x1ffff804": 6, "correspond": 6, "0x04": 6, "swo": [6, 19], "presenc": 6, "3d": 6, "case": [6, 7, 12, 14, 19], "michael": 6, "mcavoi": 6, "fin": 6, "thingvers": 6, "shapewai": 6, "bmpm_v2_0f_schemat": 6, "wider": 6, "revers": [6, 12], "bodi": 6, "diod": 6, "wide": [6, 8], "spread": 6, "get": [6, 14, 19], "blackmagic_mini": 6, "small": [6, 8], "inspir": 6, "floss": 6, "offer": [6, 8], "05": [6, 8], "10pin": [6, 8], "molex": [6, 8], "4pin": 6, "origin": [6, 8, 12, 19], "stm32": [6, 8, 9, 15, 16, 18, 19], "20pin": 6, "carri": 6, "tx": 6, "rx": 6, "physic": [6, 8], "io": [6, 7], "texa": [6, 8], "instrument": [6, 8, 19], "directi": 6, "pc": [6, 7], "bang": [6, 19], "capabl": [6, 7, 8], "slower": 6, "faster": 6, "due": [6, 12], "upload": [6, 13, 14, 16], "inher": 6, "consol": [6, 15], "nucleo": 6, "usual": [6, 8], "lead": 6, "stabl": [6, 8, 12], "sever": [6, 12], "tutori": [6, 19], "bootstrap": 6, "stm32f103": [6, 18], "look": [6, 14, 18], "swlink": [6, 7], "handl": [6, 11, 12], "reus": [6, 14], "solut": [6, 8, 13, 16], "restor": 6, "progress": 6, "moment": 6, "504": 6, "among": 6, "integr": [6, 9], "stm8": [6, 7], "remap": 6, "infrastructur": 6, "row": [6, 8], "ti": [6, 16], "creation": 7, "mostli": [7, 19], "focus": 7, "profession": 7, "softwar": [7, 8, 9, 10, 19], "develop": [7, 10, 16], "prefer": [7, 12, 13], "retain": 7, "system": [7, 14, 15, 16, 17], "environ": [7, 14], "reli": 7, "highli": 7, "abstract": 7, "impress": 7, "simplic": 7, "cost": 7, "transpar": 7, "In": [7, 8], "most": [7, 14, 15, 16], "automat": [7, 8, 11, 14, 19], "middl": [7, 10, 14], "openocd": [7, 9], "easili": 7, "scriptabl": 7, "thank": 7, "comput": [7, 8, 13, 14], "virtual": [7, 8], "special": [7, 8, 17, 18], "watchpoint": [7, 15, 19], "examin": 7, "etc": [7, 8, 19], "semihost": 7, "class": 7, "bmd": [7, 10, 13], "extended_remot": 7, "serial_port": 7, "race": 7, "beginn": 7, "great": 7, "choic": [7, 14, 19], "But": 7, "expect": [7, 13, 15], "experi": 7, "klickybunti": 7, "gui": 7, "unclear": 7, "hard": [7, 15], "understand": 7, "websit": 7, "comprehens": [7, 19], "enough": 7, "goe": [7, 18], "scan": [7, 14, 15], "enter": 7, "ctrl": [7, 14, 15], "d": [7, 8, 13, 19], "purchas": 7, "beyond": 7, "organ": 7, "piotr": 7, "tempski": 7, "sponsor": 7, "rachel": 7, "mant": 7, "patreon": 7, "mind": 7, "sale": 7, "distributor": 7, "alphabet": 7, "de": 7, "germani": 7, "newest": [7, 13], "usa": 7, "adafruit": 7, "industri": 7, "v3": 7, "libftdi": 7, "link": [7, 10, 12, 15], "unmodfi": 7, "discoveri": [7, 9], "stlinkv1": 7, "bluepil": 7, "sw": [7, 15], "f4": 7, "stm32f407": 7, "f4discoveri": 7, "blackpil": 7, "stm32f411": 7, "blackpillv2": 7, "icdi": 7, "hydrabu": 7, "tm4c": [7, 8], "stand": [7, 8, 10], "alon": [7, 10], "onto": 7, "resembl": 7, "kind": [7, 14, 19], "cmsis_dap": 7, "slow": 7, "suggest": [7, 8], "feel": [7, 13], "chat": 7, "architectur": [8, 16], "m0": 8, "m4": 8, "except": 8, "efm32": [8, 16], "silicon": [8, 16], "lab": [8, 16], "ezr32": 8, "freescal": [8, 16], "kl25": 8, "kl27": 8, "kl02": 8, "lmi": 8, "lm3": 8, "lpc8xx": 8, "lpc15xx": 8, "lpc17xx": 8, "lpc43xx": 8, "lpc546xx": 8, "lpc546": 8, "msp432": 8, "msp432p401": 8, "nrf51": [8, 16], "nordic": [8, 16], "nrf52": [8, 16], "nxpke04": 8, "ke04": 8, "rp": 8, "rp20240": 8, "sam3x": 8, "sam3n": 8, "sam3": 8, "sam3u": 8, "sam4": 8, "sam4l": 8, "samd": 8, "d20": 8, "d21": 8, "samx5x": 8, "samx5xqq": 8, "samdx5x": 8, "samd5x": 8, "e5x": 8, "stm32f0": 8, "stm32f3": 8, "stm32f4": 8, "stm32f2": 8, "stm32f7": 8, "stm32g0": 8, "g0": 8, "stm32h7": 8, "h7": 8, "stm32l1": 8, "stm32l4": 8, "stm32g4": 8, "sep": 8, "2021": [8, 12], "profit": 8, "experiment": 8, "xilinx": 8, "soc": 8, "date": [8, 19], "kept": 8, "ftsh": 8, "105": 8, "01": [8, 11], "dv": 8, "k": 8, "samtec": 8, "bui": 8, "digi": 8, "kei": [8, 12, 14], "50mil": 8, "27mm": 8, "pitch": 8, "shroud": 8, "occupi": 8, "larg": [8, 14], "pcb": [8, 9], "too": [8, 14], "amphenol": 8, "fci": 8, "20021121": 8, "00010c4lf": 8, "unshroud": 8, "smd": 8, "20021111": 8, "00010t4lf": 8, "th": 8, "20021521": 8, "00010t1lf": 8, "20021211": 8, "cnc": 8, "tech": 8, "3220": 8, "0300": 8, "00": [8, 11], "0100": 8, "And": [8, 14], "ffsd": 8, "xx": 8, "n": [8, 14, 15], "inch": 8, "ribbon": 8, "materi": 8, "idc": 8, "crimp": 8, "3230": 8, "0103": 8, "polar": 8, "3m": 8, "3756": 8, "025": 8, "64mm": 8, "conductor": 8, "0532610471": 8, "hand": 8, "050079": 8, "8000": 8, "26": 8, "28awg": 8, "50058": 8, "28": 8, "32awg": 8, "socket": 8, "0510210400": 8, "hous": 8, "0638271400": 8, "warn": 8, "frustrat": 8, "destroi": 8, "skip": 8, "cheaper": 8, "claim": 8, "choos": 8, "whatev": 8, "pre": [8, 13, 18], "150mm": 8, "300mm": 8, "assort": 8, "made": 8, "pigtail": 8, "paparazzi": 8, "uav": 8, "autopilot": 8, "basi": 8, "custom": 8, "miss": [8, 19], "togeth": 8, "kicad": [8, 9], "oshpark": 8, "peripher": 8, "inaccess": [8, 15], "gdbinit": [8, 15], "treat": 8, "ram": [8, 12], "512": 8, "boot": [8, 11], "sysmemremap": 8, "0x40048000": 8, "upon": 8, "valid": [8, 11, 14], "hold": [8, 13], "achiev": 8, "startup": [8, 15], "famili": [8, 19], "item": 8, "99": [8, 19], "black_sp": 8, "if00": [8, 14, 15], "udev": [8, 18, 19], "rule": [8, 18, 19], "content": [8, 14, 15], "subsystem": 8, "attr": 8, "symlink": 8, "ttybmpgdb": [8, 15], "ttybmptarg": [8, 18], "unplug": 8, "restart": 8, "stty": 8, "netcat": 8, "tcp": 8, "2000": 8, "raw": 8, "onlcr": 8, "iexten": 8, "echo": [8, 14], "echok": 8, "echoctl": 8, "nc": 8, "vkl": 8, "p": 8, "ttybmbgdb": 8, "hostnam": 8, "ip": 8, "ye": 8, "draw": 8, "30": 8, "60ma": 8, "120ma": 8, "6w": 8, "dissip": 8, "heat": 8, "regul": [8, 15], "75": 8, "rate": [8, 18], "125": 8, "newer": 8, "dec": 8, "16": [8, 19], "2020": 8, "advantag": 8, "insid": 8, "regular": 8, "preliminari": 8, "abil": 8, "chain": [8, 15], "proprietari": 8, "setup": [8, 14], "repeat": 8, "config": 8, "fire": 8, "necessari": 8, "buri": 8, "deepli": 8, "killer": 8, "robot": 8, "equip": 8, "kickstart": 8, "backer": 8, "receiv": [8, 18, 19], "7v": 8, "high": [8, 19], "robust": 8, "wrongli": 8, "less": 8, "hurt": 8, "ttl": 8, "bonu": 8, "simultan": 8, "nobodi": 8, "pend": 8, "failur": 8, "pr": 8, "triag": 8, "old": 8, "tdmi": 8, "compit": 8, "sampl": [8, 19], "dig": 8, "deep": 8, "spec": [8, 17], "64bit": 8, "166": 8, "atom": [9, 16], "editor": 9, "librari": [9, 14, 16, 17, 18], "stm32flash": 9, "eda": 9, "geda": 9, "pyocd": 9, "python": [9, 14], "rs": 9, "toolkit": 9, "rust": 9, "pystlink": 9, "texan": 9, "aka": [10, 14, 18], "nativ": [10, 13], "variou": [10, 19], "debup": 10, "app": 10, "bmda": 10, "despit": [11, 12], "effort": [11, 12], "unifi": [11, 12], "0x00000040": 11, "clear": 11, "mask": 11, "0x180": 11, "0x000001c0": 11, "samx7x": 11, "secur": [11, 12], "disabl": [11, 12, 15], "select": [11, 13, 14], "reserv": 11, "tcm": 11, "kbyte": 11, "dtcm": 11, "itcm": 11, "32": [11, 16], "64": [11, 16], "11": 11, "128": 11, "effect": 11, "One": 12, "area": 12, "volatil": 12, "novemb": 12, "least": 12, "notic": [12, 19], "unexpect": 12, "behaviour": 12, "heterogen": 12, "split": 12, "sent": [12, 19], "wherea": [12, 19], "especi": [12, 14, 18], "attempt": 12, "sure": [12, 14], "chapter": 12, "irrevers": 12, "explicitli": 12, "specifi": [12, 17, 18, 19], "0x08000000": 12, "consequ": 12, "piec": 12, "entir": 12, "rest": 12, "0x1fff7000": 12, "otp_1024byt": 12, "succeed": [12, 14], "1024": 12, "yyi": 12, "kib": 12, "sub": 12, "0x1fff73e0": 12, "otp_8byt": 12, "143": 12, "mention": 12, "along": 12, "otp_tab": 12, "__attribute__": 12, "0xaabbaabb": 12, "0xccddccdd": 12, "linker": [12, 17], "r": 12, "1k": 12, "keep": 12, "extract": 12, "objcopi": 12, "binutil": 12, "j": 12, "o": [12, 17, 19], "otp_data": 12, "bleed": 13, "edg": 13, "asset": 13, "action": [13, 15], "click": [13, 16], "zip": 13, "daili": 13, "sudo": 13, "6017": 13, "0x08002000": 13, "leav": 13, "homebrew": 13, "macport": 13, "fink": 13, "greater": 13, "dfuse": 13, "brick": 13, "button": [13, 18], "forc": [13, 15], "stai": 13, "ex": [13, 14], "zadig": 13, "winusb": 13, "both": 13, "pid": 13, "0x6017": 13, "0x6018": 13, "stm32_mem": 13, "associ": 13, "hack": 13, "languag": 14, "bind": 14, "accomplish": 14, "liner": 14, "nx": 14, "kill": [14, 15], "yourbinari": 14, "rememb": 14, "comx": 14, "usbmodemxxxxxxx1": 14, "vref": 14, "translat": [14, 15], "invoc": 14, "simplifi": 14, "black_magic_probe_flash": 14, "scr": 14, "shrink": 14, "yourbin": 14, "bmp_port": 14, "q": 14, "suffix": 14, "complic": 14, "script_dir": 14, "ifeq": 14, "bmp_port_candid": 14, "wildcard": 14, "black_sphere_technologies_black_magic_probe_": 14, "endif": 14, "templat": 14, "similar": [14, 19], "bat": 14, "rem": 14, "dp0": 14, "my": [14, 19], "driverlett": 14, "slash": 14, "working_directori": 14, "p0": 14, "toolchain_path": 14, "bmp_gdb_port": 14, "elf_fil": 14, "share": 14, "bmp_gdb_upload_swd": 14, "bmp_upload": 14, "com1": 14, "bulk": 14, "loop": 14, "audibl": 14, "audio": 14, "playback": 14, "plai": 14, "cycl": 14, "onlin": [14, 15], "sleep": 14, "gdb_upload": 14, "period": 14, "combin": [14, 19], "modern": 14, "shorter": 14, "half": 14, "newli": 14, "paplai": 14, "usr": 14, "sound": 14, "ubuntu": [14, 18], "stereo": 14, "ogg": 14, "disconnect": [14, 15], "accident": 14, "reeras": 14, "those": 14, "afplai": 14, "ping": 14, "aiff": 14, "bunch": 14, "annot": 14, "strang": 14, "connect_srst": [14, 15], "ideal": 14, "determin": 14, "ciminst": 14, "classnam": 14, "win32_serialport": 14, "filter": [14, 19], "pnpdeviceid": 14, "vid_1d50": 14, "pid_6018": 14, "mi_00": 14, "expandproperti": 14, "deviceid": 14, "brief": [15, 19], "summari": 15, "commonli": 15, "consult": 15, "perform": 15, "black_sphere_technologies_black_magic_probe_e2c0c4c6": 15, "usbmodeme2c0c4c6": 15, "mors": 15, "hard_srst": 15, "puls": 15, "vcom": 15, "context": 15, "sensit": 15, "certain": [15, 17], "erase_mass": 15, "vtarget": 15, "onboard": 15, "home": [15, 16], "transfer": 15, "accordingli": 15, "crc32": 15, "inconsist": 15, "event": [15, 19], "occur": 15, "halt": 15, "entri": 15, "send": [15, 18], "sigint": 15, "watch": 15, "var": 15, "reach": 15, "expr": 15, "ihex": 15, "intel": [15, 16], "hex": 15, "format": [15, 19], "ecosystem": 16, "iot": 16, "popular": 16, "maco": 16, "beaglebon": 16, "cubieboard": 16, "avr": 16, "espressif": 16, "8266": 16, "arc32": 16, "lattic": 16, "ice40": 16, "maxim": 16, "microchip": 16, "pic32": 16, "teensi": 16, "msp430": 16, "tiva": 16, "wiznet": 16, "w7500": 16, "framework": [16, 19], "arduino": [16, 17, 18], "artik": 16, "sdk": 16, "energia": 16, "esp": 16, "idf": 16, "mbed": 16, "pumbaa": 16, "simba": 16, "spl": 16, "stm32cube": 16, "wiringpi": 16, "200": 16, "vscode": 16, "eclips": [16, 19], "sublim": 16, "column": 16, "wizard": 16, "icon": 16, "toolbar": 16, "ini": 16, "env": 16, "someboard": 16, "debug_tool": 16, "upload_protocol": 16, "upload_port": 16, "update_m": 16, "monitor_port": 16, "menu": 16, "happi": 16, "visit": 16, "pioplu": 16, "establish": 16, "commun": 16, "keyboard": 17, "input": [17, 19], "lseek": 17, "renam": 17, "unlink": 17, "stat": 17, "isatti": 17, "facil": 17, "rdimon": 17, "lrdimon": 17, "flag": 17, "stdin": 17, "stdout": [17, 19], "stderr": 17, "scanf": 17, "newlib": 17, "runtim": 17, "nostartfil": 17, "initialis": 17, "initialise_monitor_handl": 17, "aarch32": 17, "aarch64": 17, "trace": [18, 19], "tdo": 18, "pa10": 18, "blue": 18, "pill": 18, "bmtrace": 18, "orbuculum": 18, "serialwireoutput": 18, "userland": 18, "flush": 18, "undecod": 18, "async": 18, "nrz": 18, "manchest": [18, 19], "baud": 18, "asynchron": [18, 19], "auto": 18, "synchron": [18, 19], "2250000": 18, "stream": [18, 19], "stimulu": 18, "4500000": 18, "view": 18, "cat": 18, "shown": 18, "inf": 18, "putti": 18, "label": 18, "complex": 18, "suitabl": 18, "1125000": 18, "graphic": 18, "advanc": [18, 19], "swo_listen": 18, "bmp_traceswo": [18, 19], "rather": 19, "diagnost": 19, "macrocel": 19, "etm": 19, "itm": 19, "orient": 19, "toward": 19, "ship": 19, "tpiu": 19, "frame": 19, "encod": 19, "sensibl": 19, "baudrat": 19, "within": 19, "essenti": 19, "task": 19, "timer": 19, "wast": 19, "scheme": 19, "sens": 19, "turn": 19, "consist": 19, "charact": 19, "fine": 19, "nickd4": 19, "insert": 19, "could": 19, "major": 19, "peculiar": 19, "pelican": 19, "mandat": 19, "deriv": 19, "mcuoneclips": 19, "2016": 19, "17": 19, "cleaner": 19, "forum": 19, "segger": 19, "index": 19, "php": 19, "thread": 19, "threadid": 19, "608": 19, "interpret": 19, "search": 19, "uncertain": 19, "endpoint": 19, "tristanseifert": 19, "modif": 19, "seem": 19, "sinc": 19, "investig": 19, "tristan": 19}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"get": [0, 2, 4, 7, 8, 11], "start": [0, 15, 16], "black": [0, 6, 7, 8, 15, 18], "magic": [0, 6, 7, 8, 15, 18], "probe": [0, 6, 8, 15, 18], "connect": [0, 8, 15], "your": [0, 4, 15], "comput": 0, "softwar": 0, "video": 0, "tutori": 0, "open": 0, "sourc": [0, 2], "cortex": [0, 3, 4], "m": [0, 4], "develop": [0, 4, 6], "contribut": 1, "gener": 1, "patch": 1, "polici": 1, "draft": 1, "firmwar": [2, 8, 13], "hack": 2, "project": [2, 7], "compil": 2, "nativ": [2, 6], "hardwar": [2, 6, 7, 8], "altern": 2, "build": 2, "window": [2, 13, 14, 18], "pc": 2, "applic": 2, "enabl": [2, 15], "debug": [2, 7, 15, 16], "messag": 2, "updat": 2, "check": 2, "befor": 2, "provid": 2, "pull": 2, "request": 2, "A": 3, "target": [3, 4, 5, 6, 7, 8, 12, 15, 18], "hook": 4, "driver": [4, 5], "system": 4, "set": [4, 11, 15], "up": [4, 8], "environ": 4, "implement": [4, 5], "ad": [4, 5], "ram": 4, "flash": [4, 5, 8, 14], "custom": 4, "command": [4, 11, 15], "special": 4, "handl": 4, "from": [4, 8, 12, 15, 16], "zero": 4, "sixti": 4, "summari": 4, "extern": [5, 18], "api": 5, "intern": 5, "raw": 5, "jtag": [5, 8], "devic": [5, 8, 15], "arm": 5, "adiv5": 5, "program": [5, 12, 14, 15], "skeleton": 5, "support": [6, 7, 8, 16, 19], "v2": 6, "3": [6, 8], "bmp23": 6, "mini": 6, "1": [6, 8], "bmp21": 6, "0": 6, "bmpm2": 6, "v1": 6, "bmpm1": 6, "ftdi": 6, "st": [6, 8], "link": [6, 8, 9], "f4": 6, "discoveri": 6, "sw": 6, "bluepil": 6, "blackpil": 6, "minim": 6, "board": 6, "launchpad": 6, "icdi": 6, "The": 7, "plug": 7, "plai": 7, "mcu": [7, 8], "debugg": [7, 16], "goal": 7, "what": [7, 8], "quick": [7, 16], "demo": 7, "other": 7, "app": 7, "bmda": 7, "contact": 7, "faq": 8, "ar": 8, "current": 8, "where": 8, "can": 8, "i": 8, "find": [8, 15], "bmp": [8, 18], "schemat": 8, "those": 8, "swd": [8, 19], "connector": 8, "cabl": 8, "uart": 8, "differ": 8, "adapt": 8, "binari": [8, 12], "imag": 8, "avail": [8, 15], "download": 8, "how": 8, "access": [8, 15], "memori": [8, 15], "map": [8, 15], "o": 8, "gdb": [8, 14, 15], "do": 8, "prevent": 8, "corrupt": 8, "when": 8, "write": 8, "an": [8, 12], "lpc": 8, "It": 8, "s": 8, "annoi": 8, "look": 8, "alwai": 8, "chang": 8, "name": 8, "linux": [8, 13, 18], "want": 8, "anoth": 8, "machin": 8, "Is": 8, "normal": 8, "my": 8, "warm": 8, "notic": 8, "doe": 8, "compar": 8, "programm": 8, "why": 8, "xxx": 8, "raspberri": 8, "pi": 8, "beagl": 8, "bone": 8, "upgrad": [8, 13], "more": 8, "recent": 8, "version": 8, "terminolog": 10, "sam3x": 11, "4x": 11, "x7x": 11, "gpnvm": 11, "bit": 11, "stm32": [12, 13], "stm32g0": 12, "otp": 12, "host": 12, "blackmag": 12, "prepar": 12, "onli": 12, "data": 12, "maco": 13, "dfu": 13, "util": 13, "us": 13, "mem": 13, "py": 13, "built": 13, "tool": 13, "autom": 14, "commandlin": 14, "makefil": 14, "batch": 14, "In": 14, "product": 14, "auto": 14, "detect": 14, "port": 14, "powershel": 14, "list": 15, "attach": 15, "io": 15, "load": 15, "onto": 15, "stop": 15, "condit": 15, "examin": 15, "state": 15, "detach": 15, "platformio": 16, "content": 16, "pio": 16, "unifi": 16, "cli": 16, "advanc": 16, "configur": 16, "issu": 16, "semihost": 17, "serial": 18, "wire": 18, "output": 18, "processor": 18, "setup": 18, "swo": 18, "decod": 18, "viewer": 18, "traceswo": 19}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})