// --- DỮ LIỆU CÂU HỎI (ĐỀ SỐ 1 - 50 CÂU HOÀN CHỈNH) ---
const de1 = [
    {
        cau: "Câu 1: Tư tưởng xã hội chủ nghĩa là gì?",
        options: [
            "A. Là một hệ thống những quan niệm phản ánh những nhu cầu, những ước mơ, nguyện vọng của các giai cấp lao động về một xã hội không có áp bức và bóc lột, mọi người đều bình đẳng và có cuộc sống ấm no, hạnh phúc.",
            "B. Là những thành tựu của con người đạt được trong quá trình đấu tranh giải phóng giai cấp.",
            "C. Là chế độ xã hội không có áp bức bóc lột, mọi người đều bình đẳng tự do.",
            "D. Cả A, B, C"
        ],
        dap_an: "D",
        giai_thich: "Tư tưởng XHCN là hệ thống quan niệm phản ánh nguyện vọng của giai cấp lao động về xã hội không có áp bức, bóc lột, mọi người bình đẳng, ấm no."
    },
    {
        cau: "Câu 2: Những biểu hiện cơ bản của tư tưởng xã hội chủ nghĩa là gì?",
        options: [
            "A. Là những ước mơ nguyện vọng về một chế độ xã hội ai cũng có việc làm ai cũng lao động.",
            "B. Là quan niệm về một chế độ xã hội mà tư liệu sản xuất đều thuộc về mọi thành viên xã hội.",
            "C. Là những tư tưởng về một xã hội, trong đó mọi người đều bình đẳng, có cuộc sống ấm no, tự do, hạnh phúc.",
            "D. Cả A, B và C"
        ],
        dap_an: "D",
        giai_thich: "Các lựa chọn A, B, C đều là những biểu hiện cơ bản của một xã hội XHCN lý tưởng."
    },
    {
        cau: "Câu 3: Những yếu tố tư tưởng XHCN được xuất hiện từ khi nào?",
        options: [
            "A. Chế độ tư bản chủ nghĩa ra đời.",
            "B. Sự xuất hiện chế độ tư hữu, xuất hiện giai cấp thống trị và bóc lột.",
            "C. Sự xuất hiện giai cấp công nhân.",
            "D. Ngay từ thời cộng sản nguyên thuỷ."
        ],
        dap_an: "B",
        giai_thich: "Tư tưởng XHCN ra đời là phản ứng của giai cấp bị áp bức trước sự bất công, tức là khi có chế độ tư hữu và bóc lột."
    },
    {
        cau: "Câu 4: Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là gì?",
        options: [
            "A. Là những quy luật và tính quy luật chính trị – xã hội của quá trình phát sinh, hình thành và phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa.",
            "B. Là những quy luật hình thành, phát triển và hoàn thiện của các hình thái kinh tế - xã hội.",
            "C. Là những quy luật và tính quy luật chính trị – xã hội của quá trình phát sinh, hình thành và phát triển hình thái kinh tế - xã hội chủ nghĩa xã hội.",
            "D. Cả A, B và C Đáp án"
        ],
        dap_an: "A",
        giai_thich: "Đối tượng nghiên cứu là những quy luật và tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành, phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa."
    },
    {
        cau: "Câu 5: Chức năng và nhiệm vụ của chủ nghĩa xã hội khoa học là gì?",
        options: [
            "A. Là trang bị những tri thức khoa học của chủ nghĩa Mác - Lênin đã phát hiện ra và luận giải về quá trình tất yếu lịch sử dẫn đến hình thành, phát triển hình thái kinh tế - xã hội cộng sản, giải phóng xã hội, giải phóng con người.",
            "B. Là giáo dục, trang bị lập trường tư tưởng chính trị của giai cấp công nhân cho đảng cộng sản, giai cấp công nhân và nhân dân lao động.",
            "C. Là định hướng về chính trị – xã hội cho mọi hoạt động của giai cấp công nhân, của đảng cộng sản, của nhà nước và của nhân dân lao động trên mọi lĩnh vực.",
            "D. Cả A, B và C đều đúng."
        ],
        dap_an: "D",
        giai_thich: "CNXHKH có chức năng lý luận, giáo dục lập trường tư tưởng chính trị và định hướng chính trị – xã hội."
    },
    {
        cau: "Câu 6: Ai đã đưa ra quan niệm \"CNXH là sự phản kháng và đấu tranh chống sự bóc lột người lao động, một cuộc đấu tranh nhằm hoàn toàn xoá bỏ sự bóc lột\"",
        options: [
            "A. S.Phuriê.",
            "B. C.Mác.",
            "C. Ph.Ănghen.",
            "D. V.I.Lênin."
        ],
        dap_an: "C",
        giai_thich: "(Đáp án từ tài liệu gốc)"
    },
    {
        cau: "Câu 7: Ai được coi là người mở đầu các trào lưu xã hội chủ nghĩa và cộng sản chủ nghĩa thời cận đại.",
        options: [
            "A. Tômađô Campanenla.",
            "B. Tômát Morơ.",
            "C. Arítxtốt.",
            "D. Platôn."
        ],
        dap_an: "B",
        giai_thich: "(Đáp án từ tài liệu gốc)"
    },
    {
        cau: "Câu 8: Ai là người viết tác phẩm \"Không tưởng\" (Utôpi)",
        options: [
            "A. Xanh Xi Mông.",
            "B. Campanenla.",
            "C. Tômát Morơ.",
            "D. Uynxtenli."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 9: Ai là người đã đưa ra chủ trương thiết lập nền \"Chuyên chính cách mạng của những người lao động\".",
        options: [
            "A. Tômát Morơ.",
            "B. Xanh Ximông.",
            "C. Grắccơ Babớp.",
            "D. Morenly."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 10: Tư tưởng về \"Giang sơn ngàn năm của Chúa\" xuất hiện ở thời đại nào.",
        options: [
            "A. Cộng sản nguyên thuỷ.",
            "B. Thời cổ đại.",
            "C. Thời cận đại.",
            "D. Thời phục hưng."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 11: Tác phẩm \"Thành phố mặt trời\" là của tác giả nào?",
        options: [
            "A. Giêrắcdơ Uyxntenli.",
            "B. Tômađô Campanenla.",
            "C. Giăng Mêliê.",
            "D. Sáclơ Phuriê."
        ],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 12: Ai đã viết tác phẩm \"Những di chúc của tôi\"",
        options: [
            "A. Tômát Morơ.",
            "B. Giăng Mêliê.",
            "C. Grắccơ Babớp.",
            "D. Morenly."
        ],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 13: Ai là người đã nêu ra \"Tuyên ngôn của những người bình dân\"?",
        options: [
            "A. Tômát Morơ.",
            "B. Xanh Ximông.",
            "C. Grắccơ Babớp.",
            "D. Morenly."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 14: Ai là người đặt vấn đề đấu tranh cho chủ nghĩa xã hội với tính cách là một phong trào thực tiễn (Phong trào hiện thực)",
        options: [
            "A. Tômát Morơ.",
            "B. Xanh Ximông.",
            "C. Grắccơ Babớp.",
            "D. Morenly."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 15: Những nhà tư tưởng tiêu biểu của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX?",
        options: [
            "A. Grắccơ Babớp, Xanh Ximông, Sáclơ Phuriê.",
            "B. Xanh Ximông, Sáclơ Phuriê, G. Mably.",
            "C. Xanh Ximông, Sáclơ Phuriê, Rôbớt Ôoe.",
            "D. Xanh Ximông, Giăng Mêliê, Rôbớt Ôoen."
        ],
        dap_an: "C",
        giai_thich: "Giáo trình nêu rõ các đại biểu của chủ nghĩa xã hội không tưởng phê phán là Xanh Ximông, S. Phuriê và R. Oen."
    },
    {
        cau: "Câu 16: Nhà tư tưởng xã hội chủ nghĩa không tưởng nào đã nói đến vấn đề giai cấp và xung đột giai cấp.",
        options: [
            "A. Xanh Ximông.",
            "B. Sáclơ Phuriê.",
            "C. Rôbớt Ôoen.",
            "D. Grắccơ Babớp."
        ],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 17: Nhà tư tưởng xã hội chủ nghĩa nào đã tố cáo quá trình tích luỹ tư bản chủ nghĩa bằng hình ảnh \"cừu ăn thịt người\".",
        options: [
            "A. Tômát Morơ.",
            "B. Sáclơ Phuriê.",
            "C. Rôbớt Ôoen.",
            "D. Grắccơ Babớp."
        ],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 18: Ai là người nêu ra luận điểm: Trong nền kinh tế tư bản chủ nghĩa, \"sự nghèo khổ được sinh ra từ chính sự thừa thãi\".",
        options: [
            "A. Xanh Ximông.",
            "B. Sáclơ Phuriê.",
            "C. Rôbớt Ôoen.",
            "D. Tômát Morơ."
        ],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 19: Nhà tư tưởng xã hội chủ nghĩa nào đã chia lịch sử phát triển của nhân loại thành các giai đoạn: mông muội, dã man, gia trưởng và văn minh.",
        options: [
            "A. Xanh Ximông.",
            "B. Sáclơ Phuriê.",
            "C. Grắccơ Babớp (Lặp).",
            "D. Tômát."
        ],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 20: Ai đã nêu ra tư tưởng: trình độ giải phóng xã hội được đo bằng trình độ giải phóng phụ nữ?",
        options: [
            "A. Xanh Ximông.",
            "B. Sáclơ Phuriê.",
            "C. Grắccơ Babớp.",
            "D. Rôbớt Ôoen."
        ],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 21: Người mơ ước xây dựng thành phố mặt trời... Ông là ai?",
        options: [
            "A. Giê-rắc Uynxteli.",
            "B. Grắc Babơp.",
            "C. Tômađô Cămpanela.",
            "D. Tô mát Mo rơ."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 22: Nhà tư tưởng xã hội chủ nghĩa nào đã tiến hành thực nghiệm xã hội cộng sản trong lòng xã hội tư bản?",
        options: [
            "A. Xanh Ximông.",
            "B. Sáclơ Phuriê.",
            "C. Grắccơ Babớp.",
            "D. Rôbớt Ôoen."
        ],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 23: Nhà tư tưởng xã hội chủ nghĩa nào đã bị phá sản trong khi thực nghiệm tư tưởng cộng sản chủ nghĩa của mình?",
        options: [
            "A. Xanh Ximông.",
            "B. Sáclơ Phuriê.",
            "C. Rôbớt Ôoen.",
            "D. Tômát Morơ."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 24: Những đại biểu tiêu biểu cho chủ nghĩa xã hội không tưởng phê phán thế kỷ XIX ở Pháp và Anh?",
        options: [
            "A. Xanh xi mông.",
            "B. Phuriê.",
            "C. Rô Bớc Ô Oen.",
            "D. Cả A, B, C."
        ],
        dap_an: "D",
        giai_thich: "Xanh Ximông và Phuriê (Pháp), Rôbớt Ôoen (Anh) là các đại biểu tiêu biểu."
    },
    {
        cau: "Câu 25: Chọn những tác giả nào đúng với tác phẩm của họ?",
        options: [
            "A. To mát Morơ: Tác phẩm Thành phố mặt trời.",
            "B. Tômađô Campanenla: Tác phẩm Không tưởng (Utopie).",
            "C. Giắccơ Babớp: Tuyên ngôn của những người bình dân.",
            "D. Cả ba đều sai."
        ],
        dap_an: "D",
        giai_thich: "(A và B bị liệt kê sai tác phẩm, do đó D là đúng trong trường hợp này)."
    },
    {
        cau: "Câu 26: Những hạn chế cơ bản của các nhà tư tưởng xã hội chủ nghĩa trước Mác là gì?",
        options: [
            "A. Chưa thấy được bản chất bóc lột và quá trình phát sinh phát triển và diệt vong tất yếu của chủ nghĩa tư bản.",
            "B. Không dùng bạo lực cách mạng để xoá bỏ chế độ tư bản chủ nghĩa.",
            "C. Không phát hiện được lực lượng xã hội tiên phong có thể thực hiện cuộc chuyển biến cách mạng từ chủ nghĩa tư bản lên chủ nghĩa xã hội và cộng sản chủ nghĩa.",
            "D. Cả A, B và C."
        ],
        dap_an: "D",
        giai_thich: "Các nhà không tưởng phê phán có hạn chế là không phát hiện được quy luật vận động (A), không tìm được lực lượng xã hội tiên phong (C), và chỉ dừng lại ở thuyết XHCN không tưởng (dùng cải tạo xã hội, không phải bạo lực cách mạng)."
    },
    {
        cau: "Câu 27: Nguyên nhân chủ yếu của những hạn chế của chủ nghĩa xã hội không tưởng là?",
        options: [
            "A. Do trình độ nhận thức của những nhà tư tưởng.",
            "B. Do khoa học chưa phát triển.",
            "C. Do những điều kiện lịch sử khách quan quy định.",
            "D. Cả A, B, C."
        ],
        dap_an: "C",
        giai_thich: "Hạn chế là do điều kiện lịch sử khách quan quy định."
    },
    {
        cau: "Câu 28: C. Mác sinh ngày tháng năm nào?",
        options: [
            "A. 14.3.1918.",
            "B. 5.5.1820.",
            "C. 5.5.1818.",
            "D. 22.4.1818."
        ],
        dap_an: "C",
        giai_thich: "C. Mác sinh năm 1818."
    },
    {
        cau: "Câu 29: Mác mất ngày tháng năm nào?",
        options: [
            "A. 14.3.1883.",
            "B. 14.3.1881.",
            "C. 5.8.1883.",
            "D. 21.1.1883."
        ],
        dap_an: "A",
        giai_thich: "C. Mác mất năm 1883."
    },
    {
        cau: "Câu 30: Ph. Ăngghen sinh ngày tháng năm nào?",
        options: [
            "A. 25.11.1818.",
            "B. 28.11.1820.",
            "C. 5.5.1820.",
            "D. 22.4.1820."
        ],
        dap_an: "B",
        giai_thich: "Ph. Ăngghen sinh năm 1820."
    },
    {
        cau: "Câu 31: Ph. Ăngghen mất ngày tháng năm nào?",
        options: [
            "A. 14.3.1888.",
            "B. 5.8.1895.",
            "C. 28.11.1895.",
            "D. 21.1.1895."
        ],
        dap_an: "B",
        giai_thich: "Ph. Ăngghen mất năm 1895."
    },
    {
        cau: "Câu 32: Ai là người được Ph.Ăngghen nhận xét là \"có tầm mắt rộng thiên tài\"?",
        options: [
            "A. Phurie.",
            "B. Ôoen.",
            "C. G. Ba lớp.",
            "D. Xanh Ximông."
        ],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 33: Ai là người được Ph.Ăngghen đánh giá là \"nắm phép biện chứng một cách cũng tài tình như Hêghen là người đương thời với ông\"?",
        options: [
            "A. Mê li ê.",
            "B. Xanh Ximông.",
            "C. Phurie.",
            "D. Ôoen."
        ],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 34: Ai là người được Ph.Ăngghen nhận xét \"Mọi phong trào xã hội, mọi thành tựu thực sự đã diễn ra ở Anh vì lợi ích của công nhân đều gắn với tên tuổi của ông\" ông là ai?",
        options: [
            "A. G. Uyn xtlenli.",
            "B. Xanh Ximông.",
            "C. Các Mác.",
            "D. Ôoen."
        ],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 35: Ai là người nêu ra quan điểm: \"Dân vi quý, xã tắc thứ chi, quân vi khinh\"",
        options: [
            "A. Khổng Tử.",
            "B. Mạnh Tử.",
            "C. Hàn Phi Tử.",
            "D. Tuân tử."
        ],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 36: Ai trong số những người sau đây được Các Mác coi là nhà tư tưởng vĩ đại nhất thời cổ đại?",
        options: [
            "A. Đêmôcrit.",
            "B. Êpiquyarơ.",
            "C. Aristôt.",
            "D. Platôn."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 37: Nội dung cơ bản nhất mà nhờ đó chủ nghĩa xã hội từ không tưởng trở thành khoa học?",
        options: [
            "A. Lên án mạnh mẽ chủ nghĩa tư bản.",
            "B. Phản ánh đúng khát vọng của nhân dân lao động bị áp bức.",
            "C. Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu CNTB, xây dựng CNXH.",
            "D. Chỉ ra sự cần thiết phải thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội."
        ],
        dap_an: "C",
        giai_thich: "Sự phát hiện ra sứ mệnh lịch sử của giai cấp công nhân là phát kiến vĩ đại thứ ba, giúp khắc phục hạn chế của CNXH không tưởng và khẳng định phương diện chính trị - xã hội."
    },
    {
        cau: "Câu 38: Những điều kiện và tiền đề khách quan nào dẫn đến sự ra đời của chủ nghĩa xã hội khoa học:",
        options: [
            "A. Sự ra đời và phát triển của nền đại công nghiệp tư bản chủ nghĩa.",
            "B. Sự trưởng thành của giai cấp công nhân công nghiệp.",
            "C. Những thành tựu khoa học tự nhiên và tư tưởng lí luận đầu thế kỉ 19.",
            "D. Cả A, B và C."
        ],
        dap_an: "D",
        giai_thich: "Ba tiền đề khách quan dẫn đến sự ra đời của CNXHKH là: Điều kiện kinh tế - xã hội (A, B) và tiền đề khoa học tự nhiên và tư tưởng lý luận (C)."
    },
    {
        cau: "Câu 39: Tiền đề nào là nguồn gốc lý luận trực tiếp của chủ nghĩa xã hội khoa học.",
        options: [
            "A. Triết học cổ điển Đức.",
            "B. Kinh tế chính trị học cổ điển Anh.",
            "C. Chủ nghĩa xã hội không tưởng – phê phán.",
            "D. Cả A, B và C."
        ],
        dap_an: "C",
        giai_thich: "Chủ nghĩa xã hội không tưởng phê phán là một trong ba nguồn gốc lý luận trực tiếp của Chủ nghĩa Mác."
    },
    {
        cau: "Câu 40: Ph. Ăngghen đã đánh giá: \"Hai phát hiện vĩ đại này đã đưa chủ nghĩa xã hội trở thành một khoa học\". Hai phát kiến đó là gì?",
        options: [
            "A. Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
            "B. Sứ mệnh lịch sử của giai cấp công nhân – Học thuyết giá trị thặng dư.",
            "C. Học thuyết giá trị thặng dư – Chủ nghĩa duy vật lịch sử.",
            "D. Sứ mệnh lịch sử của giai cấp công nhân – Chủ nghĩa duy vật lịch sử."
        ],
        dap_an: "B",
        giai_thich: "Phát kiến vĩ đại thứ hai là Học thuyết giá trị thặng dư, và phát kiến thứ ba là sứ mệnh lịch sử của giai cấp công nhân."
    },
    {
        cau: "Câu 41: Vì sao chủ nghĩa xã hội khoa học theo nghĩa rộng là chủ nghĩa Mác - Lênin?",
        options: [
            "A. Vì chủ nghĩa xã hội khoa học đã phác thảo ra mô hình chủ nghĩa xã hội và chủ nghĩa cộng sản.",
            "B. Vì chủ nghĩa xã hội khoa học đã luận chứng về sứ mệnh lịch sử của giai cấp công nhân hiện đại.",
            "C. Vì chủ nghĩa xã hội khoa học dựa vào triết học, kinh tế chính trị để lý giải tính tất yếu lịch sử của Cách mạng xã hội chủ nghĩa và Hình thái kinh tế – xã hội cộng sản chủ nghĩa gắn liền với vai trò lãnh đạo của giai cấp công nhân.",
            "D. Cả A, B và C."
        ],
        dap_an: "C",
        giai_thich: "CNXHKH theo nghĩa rộng là chủ nghĩa Mác - Lênin. Nó luận giải các vấn đề chính trị - xã hội dựa trên cơ sở triết học và kinh tế chính trị."
    },
    {
        cau: "Câu 42: Tác phẩm “Phê phán cương lĩnh Gôta” là của ai?",
        options: [
            "A. C.Mác.",
            "B. Ph.Ănghen.",
            "C. C.Mác và Ph. Ănghen.",
            "D. V.I.Lênin."
        ],
        dap_an: "A",
        giai_thich: "C. Mác là tác giả của Phê phán cương lĩnh Gôta (1875)."
    },
    {
        cau: "Câu 43: Tác phẩm nào được Lênin đánh giá là “tác phẩm chủ yếu và cơ bản trình bày chủ nghĩa xã hội khoa học”",
        options: [
            "A. Chống Đuyrinh.",
            "B. Tư bản.",
            "C. Hệ tư tưởng Đức.",
            "D. Phê phán cương lĩnh Gôta."
        ],
        dap_an: "A",
        giai_thich: "Trong tác phẩm Chống Đuyrinh (1878), Ph. Ăngghen đã luận chứng sự phát triển của CNXH từ không tưởng đến khoa học. Lênin đã đánh giá cao tác phẩm này."
    },
    {
        cau: "Câu 44: Câu nói : “Thực hiện sự nghiệp giải phóng thế giới ấy - đó là sứ mệnh lịch sử của giai cấp vô sản hiện đại” là của ai",
        options: [
            "A. Các Mác.",
            "B. Ph. Ăngghen.",
            "C. Lênin.",
            "D. Hồ Chí Minh."
        ],
        dap_an: "A",
        giai_thich: "C. Mác đã nói về sứ mệnh lịch sử của giai cấp vô sản hiện đại, trích dẫn này cũng được nhắc lại trong giáo trình."
    },
    {
        cau: "Câu 45: Lý thuyết phân kỳ hình thái kinh tế-xã hội cộng sản chủ nghĩa lần đầu tiên được đề cập trong tác phẩm nào?",
        options: [
            "A. Tuyên ngôn của Đảng cộng sản.",
            "B. Nội chiến ở Pháp.",
            "C. Bộ tư bản.",
            "D. Phê phán Cương lĩnh Gôta."
        ],
        dap_an: "D",
        giai_thich: "Tác phẩm Phê phán cương lĩnh Gôta (1875) của C. Mác là nơi lần đầu tiên phân chia Hình thái kinh tế - xã hội cộng sản chủ nghĩa thành giai đoạn thấp (CNXH) và giai đoạn cao (CNCS)."
    },
    {
        cau: "Câu 46: Quốc tế cộng sản là tên gọi khác của",
        options: [
            "A. Quốc tế I.",
            "B. Quốc tế II.",
            "C. Quốc tế III.",
            "D. Hội liên hiệp công nhân quốc tế."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 47: Tác phẩm đầu tiên mà Các Mác và Ăng ghen viết chung là tác phẩm nào?",
        options: [
            "A. Hệ tư tưởng Đức.",
            "B. Tuyên ngôn Đảng Cộng sản.",
            "C. Gia đình thần thánh.",
            "D. Tình cảnh giai cấp công nhân Anh."
        ],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 48: Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học.",
        options: [
            "A. Hệ tư tưởng Đức.",
            "B. Tình cảnh giai cấp lao động ở Anh.",
            "C. Tuyên ngôn của Đảng cộng sản.",
            "D. Những nguyên lý của chủ nghĩa cộng sản."
        ],
        dap_an: "C",
        giai_thich: "Tuyên ngôn của Đảng cộng sản (1848) đánh dấu sự thành hình về cơ bản lý luận của chủ nghĩa Mác, trong đó có CNXHKH."
    },
    {
        cau: "Câu 49: Lần đầu tiên Ph.Ăngghen nói chủ nghĩa Mác cấu thành bởi ba bộ phận trong tác phẩm nào?",
        options: [
            "A. Sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học.",
            "B. Tình cảnh giai cấp công nhân Anh.",
            "C. Tuyên ngôn của Đảng cộng sản.",
            "D. Chống Đuyrinh."
        ],
        dap_an: "D",
        giai_thich: "Ph. Ăngghen đã trình bày rõ ràng ba bộ phận hợp thành (Triết học, Kinh tế chính trị, Chủ nghĩa xã hội khoa học) trong tác phẩm Chống Đuyrinh."
    },
    {
        cau: "Câu 50: Phát hiện nào sau đây của C. Mác và Ph. Ăngghen?",
        options: [
            "A. Chủ nghĩa duy vật lịch sử.",
            "B. Học thuyết giá trị thặng dư.",
            "C. Sứ mệnh lịch sử của giai cấp công nhân.",
            "D. Cả A, B, C."
        ],
        dap_an: "D",
        giai_thich: "Các Mác và Ph. Ăngghen đã sáng lập ra Chủ nghĩa duy vật lịch sử (phát kiến vĩ đại thứ nhất), Học thuyết giá trị thặng dư (phát kiến vĩ đại thứ hai), và phát hiện ra sứ mệnh lịch sử của giai cấp công nhân (phát kiến vĩ đại thứ ba)."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 2 ---
const de2 = [
    {
        cau: "Câu 1: Các Mác và Ph Ăngghen đã sử dụng thuật ngữ nào để nói về giai cấp công nhân ?",
        options: ["A. Giai cấp vô sản", "B. Giai cấp công nhân hiện đại", "C. Tất cả đều đúng", "D. Giai cấp vô sản hiện đại"],
        dap_an: "C",
        giai_thich: "Các thuật ngữ như giai cấp vô sản, giai cấp công nhân hiện đại, giai cấp vô sản hiện đại đều được sử dụng để chỉ Giai cấp công nhân trong chủ nghĩa Mác - Lênin."
    },
    {
        cau: "Câu 2: Phát kiến vĩ đại nào của Mác và Ăngghen là sự khẳng định về phương diện chính tri - xã hội sự diệt vong không tránh khỏi của chủ nghĩa tư bản và sự thắng lợi tất yếu của chủ nghĩa xã hội ?",
        options: ["A. Học thuyết về giá tzrị thặng dư", "B. Chủ nghĩa duy vật lịch sử", "C. Tác phẩm Tuyên ngôn của Đảng Cộng sản", "D. Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân"],
        dap_an: "D",
        giai_thich: "Học thuyết về sứ mệnh lịch sử của GCCN là luận chứng về phương diện chính trị - xã hội, chỉ ra lực lượng và con đường thay thế CNTB bằng CNXH."
    },
    {
        cau: "Câu 3: Để phát triển giai cấp công nhân về số lượng và chất lượng, theo chủ nghĩa Mác - Lênin phải đặc biệt chú ý đến biện pháp nào ?",
        options: ["A. Phải có sự đoàn kết của giai cấp công nhân tren toàn thế giới", "B. Phải sở hữu tư liệu sản xuất ở trong xã hội", "C. Phát triển công nghiệp; sự trưởng thành của Đảng Cộng sản", "D. Phải có sự liên minh với các giai cấp nông dân và các tầng lớp lao động khác"],
        dap_an: "C",
        giai_thich: "Phát triển nền sản xuất đại công nghiệp là điều kiện khách quan để phát triển GCCN. Sự trưởng thành của Đảng Cộng sản là điều kiện tiên quyết chủ quan để lãnh đạo GCCN thực hiện sứ mệnh lịch sử."
    },
    {
        cau: "Câu 4: Phát kiến vĩ đại nào của Mác và Ăngghen là sự khẳng định về mặt triết học sự sụp đổ của chủ nghĩa tư bản và sự thắng lợi của chủ nghĩa xã hội đều tất yếu như nhau ?",
        options: ["A. Tác phẩm Tuyên ngôn của Đảng Cộng sản", "B. Học thuyết về giá trị thặng dư", "C. Chủ nghĩa duy vật lịch sử", "D. Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân"],
        dap_an: "C",
        giai_thich: "Chủ nghĩa duy vật lịch sử là phát kiến vĩ đại thứ nhất, khẳng định sự sụp đổ và thắng lợi của CNXH đều là tất yếu lịch sử (triết học)."
    },
    {
        cau: "Câu 5: Phát kiến vĩ đại nào của Mác và Ăngghen là sự khẳng định về phương diện kinh tế sự diệt vong không tránh khỏi của chủ nghĩa tư bản và sự ra đời tất yếu của chủ nghĩa xã hội ?",
        options: ["A. Tác phẩm Tuyên ngôn của Đảng Cộng sản", "B. Chủ nghĩa duy vật lịch sử", "C. Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân", "D. Học thuyết về giá trị thặng dư"],
        dap_an: "D",
        giai_thich: "Học thuyết giá trị thặng dư là phát kiến vĩ đại thứ hai, luận giải về mặt kinh tế rằng CNTB tất yếu diệt vong do mâu thuẫn bóc lột giá trị thặng dư."
    },
    {
        cau: "Câu 6: Một trong những điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân:",
        options: ["A. Sự phát triển về chất của bản thân giai cấp công nhân", "B. Sự tăng nhanh về số lượng và chất lượng của giai cấp công nhân", "C. Địa vị kinh tế của giai cấp công nhân", "D. Giai cấp công nhân thành lập ra chính đảng của mình"],
        dap_an: "C",
        giai_thich: "Địa vị kinh tế (là người sản xuất ra của cải vật chất, bị tước đoạt tư liệu sản xuất) là điều kiện khách quan đầu tiên quy định sứ mệnh lịch sử GCCN."
    },
    {
        cau: "Câu 7: Nội dung văn hóa, tư tưởng sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay ?",
        options: ["A. Thực hiện thắng lợi mục tiêu công nghiệp hóa, hiện đại hóa, làm cho nước ta trở thành một nước công nghiệp theo hướng hiện đại", "B. Xóa bỏ hoàn toàn chế độ sở hữu tư nhân tư bản chủ nghĩa", "C. Xây dựng con người mới xã hội chủ nghĩa, giáo dục đạo đức cách mạng, rèn luyện lối sống, tác phong công nghiệp, văn minh, hiện đại", "D. Giữ vững bản chất giai cấp công nhân của Đảng; tăng cường xây dựng, chỉnh đốn Đảng, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, đạo đức, lối sống"],
        dap_an: "C",
        giai_thich: "Nội dung văn hóa, tư tưởng tập trung vào việc xây dựng con người mới XHCN, rèn luyện lối sống, tác phong công nghiệp."
    },
    {
        cau: "Câu 8: Vì sao Đảng cộng sản trở thành đội tiên phong, lãnh tụ chính trị và bộ tham mưu chiến đấu của giai cấp công nhân ?",
        options: ["A. Là một tổ chức chính trị được trang bị lý luận cách mạng của chủ nghĩa Mác-Lênin", "B. Là một tổ chức chính trị đạt được nhiều thành quả cách mạng nhất", "C. Là một tổ chức chính trị được giác ngộ lý tưởng cách mạng vô sản", "D. Là một tổ chức chính trị tập trung những người công nhân tiên tiến nhất"],
        dap_an: "D",
        giai_thich: "(Đáp án phổ biến là D, vì Đảng là tổ chức tập hợp những phần tử tiên tiến nhất và được trang bị lý luận Mác - Lênin)."
    },
    {
        cau: "Câu 9: Đâu là điểm khác biệt của giai cấp công nhân hiện đại so với giai cấp công nhân thế kỷ XIX ?",
        options: ["A. Không có điểm khác biệt", "B. Xu hướng trí tuệ hóa giảm nhanh", "C. Là lực lượng sản xuất hàng đầu của xã hội hiện đại", "D. Xu hướng trung lưu hóa gia tăng"],
        dap_an: "C",
        giai_thich: "GCCN hiện nay vẫn là lực lượng sản xuất hàng đầu."
    },
    {
        cau: "Câu 10: Để thực hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam trong bối cảnh hiện nay, phải đặc biệt coi trọng vấn đề nào sau đây ?",
        options: ["A. Phát huy vai trò đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa của giai cấp công nhân", "B. Phát huy sức mạnh đại đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng", "C. Coi trọng công tác xây dựng, chỉnh đốn Đảng, làm cho đảng lãnh đạo, cầm quyền thực sự trong sạch, vững mạnh", "D. Phát triển giai cấp công nhân cả số lượng và chất lượng"],
        dap_an: "D",
        giai_thich: "Phát triển GCCN cả số lượng và chất lượng, có trình độ học vấn, chuyên môn cao là phương hướng xây dựng GCCN Việt Nam hiện nay."
    },
    {
        cau: "Câu 11: Giai cấp công nhân thực hiện sứ mệnh lịch sử thông qua đội tiền phong của mình là:",
        options: ["A. Công hội", "B. Đảng Cộng sản", "C. Công Đoàn", "D. Đảng Cộng hòa"],
        dap_an: "B",
        giai_thich: "Giai cấp công nhân lãnh đạo cách mạng thông qua Đảng Cộng sản."
    },
    {
        cau: "Câu 12: Tính tổ chức và kỷ luật của giai cấp công nhân được hình thành từ đâu?",
        options: ["A. Nền sản xuất đại công nghiệp trong chủ nghĩa xã hội", "B. Nền sản xuất đại công nghiệp trong chủ nghĩa tư bản", "C. Cuộc đấu tranh sôi nổi trong chủ nghĩa tư bản", "D. Bị giai cấp tư sản áp bức, bóc lột nặng nề"],
        dap_an: "B",
        giai_thich: "Tính tổ chức và kỷ luật là phẩm chất của GCCN, được hình thành từ nền sản xuất đại công nghiệp."
    },
    {
        cau: "Câu 13: Quy luật chung, phổ biến cho sự ra đời của Đảng Cộng sản:",
        options: ["A. Sự kết hợp giữa chủ nghĩa Mác – Lênin với phong trào công nhân", "B. Chủ nghĩa Mác – Lênin kết hợp với phong trào công nhân và nhân dân lao động", "C. Chủ nghĩa Lênin kết hợp với phong trào công nhân", "D. Chủ nghĩa Mác – Lênin kết hợp với phong trào nông dân"],
        dap_an: "A",
        giai_thich: "(Đây là luận điểm cơ bản về quy luật ra đời của Đảng Cộng sản kiểu mới)."
    },
    {
        cau: "Câu 14: Nội dung chính trị - xã hội sứ mệnh lịch sử của giai cấp công nhân ở các nước tư bản chủ nghĩa ngày nay là:",
        options: ["A. Đấu tranh chống bất công và bất bình đẳng xã hội", "B. Đấu tranh chống chủ nghĩa tư bản với mục tiêu chống chủ nghĩa phân biệt chủng tộc, sắc tộc, tôn giáo", "C. Đấu tranh vì hòa bình, tự do và phát triển", "D. Giành chính quyền về tay giai cấp công nhân và nhân dân lao động, thiết lập nhà nước kiểu mới mang bản chất giai cấp công nhân"],
        dap_an: "D",
        giai_thich: "Mục tiêu chính trị - xã hội cơ bản của GCCN là lật đổ CNTB, giành chính quyền và thiết lập nền chuyên chính vô sản."
    },
    {
        cau: "Câu 15: Một trong những giá trị tiến bộ của chủ nghĩa xã hội không tưởng phê phán là gì?",
        options: ["A. Chỉ ra được những biện pháp thực hiện cải tạo xã hội áp bức, bất công đương thời, xây dựng xã hội mới tốt đẹp", "B. Thể hiện tinh thần phê phán, lên án chế độ quân chủ chuyên chế và chế độ tư bản chủ nghĩa đầy bất công, xung đột", "C. Đã phát hiện ra lực lượng xã hội tiên phong thực hiện cuộc chuyển biến cách mạng từ xã hội phong kiến lên chủ nghĩa tư bản sản", "D. Đã phát hiện ra lực lượng xã hội tiên phong thực hiện cuộc chuyển biến cách mạng từ chủ nghĩa tư bản lên chủ nghĩa cộng"],
        dap_an: "B",
        giai_thich: "Giá trị tiến bộ của CNXH không tưởng Pháp là thể hiện tinh thần phê phán, lên án chế độ quân chủ chuyên chế và chế độ tư bản chủ nghĩa đầy bất công, xung đột."
    },
    {
        cau: "Câu 16: Trong cuộc cách mạng về tư tưởng, giai cấp công nhân cần xây dựng và củng cố ý thức hệ tiên tiến của giai cấp mình làm nền tảng tinh thần của xã hội. Ý thức hệ đó là:",
        options: ["A. Chủ nghĩa Mác – Lênin", "B. Hệ tư tưởng dân chủ tư sản", "C. Hệ tư tưởng phong kiến", "D. Chủ nghĩa hiện sinh"],
        dap_an: "A",
        giai_thich: "Ý thức hệ tiên tiến của GCCN là Chủ nghĩa Mác - Lênin."
    },
    {
        cau: "Câu 17: Trong phương thức sản xuất tư bản chủ nghĩa, giai cấp nào đóng vai trò nòng cốt giải phóng lực lượng sản xuất, thúc đẩy lực lượng sản xuất phát triển?",
        options: ["A. Công nhân", "B. Tư sản", "C. Nông dân", "D. Công nhân và nông dân"],
        dap_an: "A",
        giai_thich: "GCCN là lực lượng sản xuất hàng đầu của xã hội hiện đại."
    },
    {
        cau: "Câu 18: Muốn thực hiện thắng lợi sứ mệnh lịch sử về nội dung kinh tế, giai cấp công nhân Việt Nam cần phải:",
        options: ["A. Phải thường xuyên giáo dục cho các thế hệ công nhân và lao động trẻ về ý thức giai cấp, bản lĩnh chính trị, chủ nghĩa yêu nước và chủ nghĩa quốc tế", "B. Thực hiện thắng lợi mục tiêu công nghiệp hóa, hiện đại hóa, làm cho nước ta trở thành một nước công nghiệp theo hướng hiện đại", "C. Phải nêu cao trách nhiệm tiên phong, đi đầu, góp phần củng cố và phát triển cơ sở chính trị - xã hội quan trọng của Đảng; chủ động, tích cực tham gia xây dựng, chỉnh đốn Đảng", "D. Phát huy vai trò của giai cấp công nhân, của công nghiệp, thực hiện khối liên minh công - nông - trí thức để tạo ra động lực phát triển nôn nghiệp - nông thôn và nông dânên chủ nghĩa cộng sản"],
        dap_an: "B",
        giai_thich: "Nội dung kinh tế sứ mệnh lịch sử GCCN Việt Nam hiện nay là thực hiện thắng lợi mục tiêu CNH, HĐH đất nước."
    },
    {
        cau: "Câu 19: Những phẩm chất nào thể hiện giai cấp công nhân là một giai cấp tiên tiến, cách mạng?",
        options: ["A. Giai cấp nghèo khổ nhất nên họ có tinh thần đấu tranh mạnh mẽ nhất", "B. Cần cù và sáng tạo trong lao động", "C. Bị giai cấp tư sản áp bức, bóc lột nặng nề nhất", "D. Tính tổ chức và kỷ luật, tự giác và đoàn kết trong cuộc đấu tranh tự giải phóng mình và giải phóng xã hội"],
        dap_an: "D",
        giai_thich: "Tính tổ chức và kỷ luật, tự giác và đoàn kết là những phẩm chất thể hiện GCCN là giai cấp tiên tiến, cách mạng."
    },
    {
        cau: "Câu 20: Muốn thực hiện thắng lợi sứ mệnh lịch sử về nội dung chính trị - xã hội, giai cấp công nhân Việt Nam cần phải:",
        options: ["A. Phải nêu cao trách nhiệm tiên phong, đi đầu, góp phần củng cố và phát triển cơ sở chính trị - xã hội quan trọng của Đảng; chủ động, tích cực tham gia xây dựng, chỉnh đốn Đảng", "B. Thực hiện thắng lợi mục tiêu công nghiệp hóa, hiện đại hóa, làm cho nước ta trở thành một nước công nghiệp theo hướng hiện đại", "C. Phát huy vai trò của giai cấp công nhân, của công nghiệp, thực hiện khối liên minh công - nông - trí thức để tạo ra động lực phát triển nôn nghiệp - nông thôn và nông dân", "D. Phải thường xuyên giáo dục cho các thế hệ công nhân và lao động trẻ về ý thức giai cấp, bản lĩnh chính trị, chủ nghĩa yêu nước và chủ nghĩa quốc tế"],
        dap_an: "A",
        giai_thich: "Nội dung chính trị - xã hội của GCCN Việt Nam là giữ vững và tăng cường vai trò lãnh đạo của Đảng, bảo vệ chế độ XHCN."
    },
    {
        cau: "Câu 21: Nội dung kinh tế sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay?",
        options: ["A. Thực hiện thắng lợi mục tiêu công nghiệp hóa, hiện đại hóa, làm cho nước ta trở thành một nước công nghiệp theo hướng hiện đại", "B. Giữ vững bản chất giai cấp công nhân của Đảng; tăng cường xây dựng, chỉnh đốn Đảng, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, đạo đức, lối sống", "C. Xây dựng con người mới xã hội chủ nghĩa, giáo dục đạo đức cách mạng, rèn luyện lối sống, tác phong công nghiệp, văn minh, hiện đại", "D. Xóa bỏ hoàn toàn chế độ sở hữu tư nhân tư bản chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Nội dung kinh tế sứ mệnh lịch sử GCCN Việt Nam là thực hiện CNH, HĐH đất nước."
    },
    {
        cau: "Câu 22: Tính tổ chức kỷ luật cao của giai cấp công nhân được hình thành là do:",
        options: ["A. Áp bức, bóc lột nặng nề nhất", "B. Tính chất của nền sản xuất đại công nghiệp", "C. Bị tước đoạt hết mọi tư liệu sản xuất", "D. Những qui định của tảng cộng sản"],
        dap_an: "B",
        giai_thich: "Tính tổ chức và kỷ luật là phẩm chất GCCN được hình thành từ nền sản xuất đại công nghiệp."
    },
    {
        cau: "Câu 23: Theo nghĩa hẹp, chủ nghĩa xã hội khoa học được hiểu là:",
        options: ["A. Xã hội cộng sản chủ nghĩa", "B. Xã hội xã hội chủ nghĩa", "C. Một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin", "D. Chủ nghĩa Mác – Lênin"],
        dap_an: "C",
        giai_thich: "Theo nghĩa hẹp, CNXHKH là một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin."
    },
    {
        cau: "Câu 24: Trong quan hệ sản xuất tư bản chủ nghĩa, giai cấp công nhân có đặc trưng cơ bản nào?",
        options: ["A. Đại diện cho quan hệ sản xuất tư bản chủ nghĩa", "B. Không có tư liệu sản xuất nên buộc phải bán sức lao động của mình để kiếm sống", "C. Chủ sở hữu tư liệu sản xuất", "D. Giai cấp bị mất hết đất đai và nghèo khổ nhất"],
        dap_an: "B",
        giai_thich: "GCCN không sở hữu tư liệu sản xuất, phải bán sức lao động để sống."
    },
    {
        cau: "Câu 25: Kế thừa và phát triển tư tưởng của C. Mác và Ăng ghen về cách mạng không ngừng, Lê nin đã xây dựng lý luận nào sau đây?",
        options: ["A. Về chuyên chính vô sản và cách mạng dân chủ tư sản kiểu mới", "B. Phát hiện ra quy luật phát triển không đồng đều của chủ nghĩa tư bản", "C. Xác định bản chất dân chủ của chế độ chuyên chính vô sản", "D. Về đảng cách mạng kiểu mới của giai cấp công nhân"],
        dap_an: "D",
        giai_thich: "(Lênin đã phát triển lý luận về Đảng Cộng sản kiểu mới, là đội tiền phong của GCCN)."
    },
    {
        cau: "Câu 26: Đặc điểm nổi bật của giai cấp công nhân là gì?",
        options: ["A. Lao động không công cho nhà tư bản ông nghiệp", "B. Lao động bằng phương thức công nghiệp", "C. Lao động tích cực, tự giác, hăng say", "D. Lao động bằng phương thức thủ c"],
        dap_an: "B",
        giai_thich: "Đặc trưng nổi bật của GCCN là họ lao động bằng phương thức công nghiệp hiện đại."
    },
    {
        cau: "Câu 27: Theo nghĩa rộng, chủ nghĩa xã hội khoa học được hiểu là:",
        options: ["A. Chủ nghĩa Mác - Lênin", "B. Xã hội cộng sản chủ nghĩa", "C. Một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin", "D. Xã hội xã hội chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Theo nghĩa rộng, CNXHKH là chủ nghĩa Mác - Lênin."
    },
    {
        cau: "Câu 28: Tuyên ngôn của Đảng Cộng sản viết; “Các giai cấp khác đều suy tàn và tiêu vong vong cùng với sự phát triển của đại công nghiệp, còn giai cấp vô sản lại là … của bản thân nền đại công nghiệp”. Chọn từ thích hợp điền vào chỗ trống?",
        options: ["A. Sản phẩm", "B. Nguyên nhân", "C. Chủ thể", "D. Kết quả"],
        dap_an: "A",
        giai_thich: "(Đây là trích dẫn nổi tiếng của Tuyên ngôn: Giai cấp vô sản là sản phẩm của nền đại công nghiệp)."
    },
    {
        cau: "Câu 29: Kế thừa tư tưởng của C. Mác và Ăngghen về khả năng thắng lợi của cách mạng xã hội chủ nghĩa, Lênin đã xây dựng lý luận nào sau đây?",
        options: ["A. Về đảng cách mạng kiểu mới của giai cấp công nhân", "B. Về chuyên chính vô sản và cách mạng dân chủ tư sản kiểu mới", "C. Cách mạng vô sản có thể nổ ra và thắng lợi ở một số nước, thậm chí ở một nước riêng lẻ", "D. Xác định bản chất dân chủ của chế độ chuyên chính vô sản"],
        dap_an: "C",
        giai_thich: "(Đây là đóng góp quan trọng của Lênin trong lý luận cách mạng vô sản)."
    },
    {
        cau: "Câu 30: Nội dung sứ mệnh lịch sử giai cấp công nhân là:",
        options: ["A. Giải quyết mâu thuẫn cơ bản giữa giai cấp công nhân và chủ nghĩa tư bản", "B. Giải quyết mẫu thuẫn cơ bản trong cơ sở hạ tầng tư bản chủ nghĩa", "C. Giải quyết mâu thuẫn cơ bản trong kiến trúc thượng tầng tư bản chủ nghĩa", "D. Giải quyết mâu thuẫn cơ bản về kinh tế và chính trị trong lòng phương thức sản xuất tư bản chủ nghĩa"],
        dap_an: "D",
        giai_thich: "(Sứ mệnh lịch sử nhằm giải quyết mâu thuẫn cơ bản giữa LLSX mang tính xã hội hóa và QHSX tư nhân TBCN)."
    },
    {
        cau: "Câu 31: Tác phẩm nào sau đây của Mác và Ăngghen được coi là Cương lĩnh chính trị, là kim chỉ nam hành động của phong trào cộng sản và công nhân quốc tế?",
        options: ["A. Tuyên ngôn của Đảng Cộng sản", "B. Hệ tư tưởng Đức.", "C. Bộ Tư bản.", "D. Bản thảo kinh tế - triết học năm 1844."],
        dap_an: "A",
        giai_thich: "Tuyên ngôn của Đảng Cộng sản được coi là Cương lĩnh chính trị, là kim chỉ nam hành động của phong trào cộng sản và công nhân quốc tế."
    },
    {
        cau: "Câu 32: Nội dung chính trị - xã hội sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay?",
        options: ["A. Xóa bỏ hoàn toàn chế độ sở hữu tư nhân tư bản chủ nghĩa", "B. Giữ vững bản chất giai cấp công nhân của Đảng; tăng cường xây dựng, chỉnh đốn Đảng, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, đạo đức, lối sống", "C. Xây dựng con người mới xã hội chủ nghĩa, giáo dục đạo đức cách mạng, rèn luyện lối sống, tác phong công nghiệp, văn minh, hiện đại", "D. Thực hiện thắng lợi mục tiêu công nghiệp hóa, hiện đại hóa, làm cho nước ta trở thành một nước công nghiệp theo hướng hiện đại"],
        dap_an: "B",
        giai_thich: "Nội dung chính trị - xã hội của GCCN Việt Nam là giữ vững bản chất giai cấp của Đảng, bảo vệ chế độ XHCN."
    },
    {
        cau: "Câu 33: Tiền đề để cải tạo toàn diện, sâu sắc và triệt để xã hội cũ và xây dựng thành công xã hội chủ nghĩa là:",
        options: ["A. Giai cấp công nhân giành lấy quyền lực thống trị xã hội", "B. Giai cấp công nhân giành lấy quyền lực văn hóa tinh thần", "C. Giai cấp công nhân giành lấy quyền lực kinh tế", "D. Giai cấp công nhân giành lấy quyền lực chính trị"],
        dap_an: "D",
        giai_thich: "Giành được quyền lực chính trị (lãnh đạo) là tiền đề để cải tạo toàn diện xã hội, thiết lập chế độ XHCN."
    },
    {
        cau: "Câu 34: Về thực chất, thực hiện sứ mệnh lịch sử của giai cấp công nhân là sự nghiệp của:",
        options: ["A. Quần chúng nhân dân", "B. Toàn dân tộc", "C. Giai cấp công nhân", "D. Toàn nhân loại Đáp án"],
        dap_an: "C",
        giai_thich: "Về thực chất, đây là sự nghiệp tự giải phóng của giai cấp công nhân."
    },
    {
        cau: "Câu 35: Với phương thức lao động công nghiệp và trong nền sản xuất tư bản chủ nghĩa, giai cấp nào là những người lao động trực tiếp hay gián tiếp vận hành các công cụ lao động có tính chất công nghiệp ngày càng hiện đại và xã hội hóa cao?",
        options: ["A. Giai cấp công nhân và nông dân", "B. Giai cấp công nhân", "C. Giai cấp nông dân", "D. Giai cấp tư sản"],
        dap_an: "B",
        giai_thich: "Giai cấp công nhân lao động bằng phương thức công nghiệp hiện đại."
    },
    {
        cau: "Câu 36: Kế thừa tư tưởng của C. Mác và Ăng ghen về chính đảng, Lê nin đã xây dựng lý luận nào sau đây?",
        options: ["A. Về đảng cách mạng kiểu mới của giai cấp công nhân", "B. Phát hiện ra quy luật phát triển không đồng đều của chủ nghĩa tư bản", "C. Xác định bản chất dân chủ của chế độ chuyên chính vô sản", "D. Về chuyên chính vô sản và cách mạng dân chủ tư sản kiểu mới"],
        dap_an: "A",
        giai_thich: "(Lênin đã phát triển lý luận về Đảng Cộng sản kiểu mới, là đội tiền phong của GCCN)."
    },
    {
        cau: "Câu 37: Nội dung kinh tế của sứ mệnh lịch sử giai cấp công nhân:",
        options: ["A. Phấn đấu cho lợi ích riêng của giai cấp khác", "B. Phấn đấu cho lợi ích của riêng giai cấp mình", "C. Đại biểu cho lợi ích chung của xã hội", "D. Lợi ích chung và riêng thống nhất"],
        dap_an: "C",
        giai_thich: "Giai cấp công nhân có lợi ích phù hợp với lợi ích cơ bản của đại đa số nhân dân lao động."
    },
    {
        cau: "Câu 38: Đâu là điểm tương đồng của giai cấp công nhân hiện đại so với giai cấp công nhân thế kỷ XIX?",
        options: ["A. Không có điểm tương đồng", "B. Là lực lượng sản xuất hàng đầu của xã hội hiện đại", "C. Xu hướng trung lưu hóa gia tăng", "D. Xu hướng trí tuệ hóa tăng nhanh"],
        dap_an: "B",
        giai_thich: "GCCN hiện nay vẫn là lực lượng sản xuất hàng đầu, là chủ thể của quá trình sản xuất công nghiệp."
    },
    {
        cau: "Câu 39: Phạm trù nào là trung tâm, nguyên lý xuất phát của chủ nghĩa xã hội khoa học?",
        options: ["A. Dân chủ xã hội chủ nghĩa", "B. Sứ mệnh lịch sử của giai cấp công nhân", "C. Chuyên chính vô sản", "D. Sứ mệnh lịch sử của giai cấp nông dân Đáp án"],
        dap_an: "B",
        giai_thich: "Sứ mệnh lịch sử của GCCN là nội dung chủ yếu, điểm căn bản của chủ nghĩa Mác - Lênin."
    },
    {
        cau: "Câu 40: Muốn thực hiện thắng lợi sứ mệnh lịch sử về nội dung kinh tế, giai cấp công nhân Việt Nam cần phải:",
        options: ["A. Phát huy vai trò của giai cấp công nhân, của công nghiệp, thực hiện khối liên minh công - nông - trí thức để tạo ra động lực phát triển nôn nghiệp - nông thôn và nông dân", "B. Phải thường xuyên giáo dục cho các thế hệ công nhân và lao động trẻ về ý thức giai cấp, bản lĩnh chính trị, chủ nghĩa yêu nước và chủ nghĩa quốc tế", "C. Phải nêu cao trách nhiệm tiên phong, đi đầu, góp phần củng cố và phát triển cơ sở chính trị - xã hội quan trọng của Đảng; chủ động, tích cực tham gia xây dựng, chỉnh đốn Đảng", "D. Giữ vững bản chất giai cấp công nhân của Đảng; tăng cường xây dựng, chỉnh đốn Đảng, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, đạo đức, lối sống"],
        dap_an: "A",
        giai_thich: "Nội dung kinh tế sứ mệnh GCCN Việt Nam là CNH, HĐH, trong đó chú trọng thực hiện khối liên minh công - nông - trí thức."
    },
    {
        cau: "Câu 41: Thông qua tác phẩm nào, Ăngghen đã chuyển từ thế giới quan duy tâm sang thế giới quan duy vật, từ lập trường dân chủ cách mạng sang lập trường cộng sản chủ nghĩa?",
        options: ["A. Tình cảnh nước Anh; Lược khảo khoa kinh tế chính trị", "B. Góp phần phê phán triết học pháp quyền của Hêghen - Lời nói đầu", "C. Bộ Tư bản", "D. Bút ký triết học"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 42: Hạn chế cơ bản của chủ nghĩa xã hội không tưởng phê phán là gì?",
        options: ["A. Không phát hiện ra được những quy luật phát triển của xã hội loài người", "B. Chưa tìm ra con đường để cải biến xã hội, lật đổ giai cấp thống trị xóa bỏ áp bức bất công", "C. Chưa nêu được tính quy luật của quá trình xây dựng chủ nghĩa xã hội và cộng sản chủ nghĩa", "D. Không phát hiện ra lực lượng xã hội tiên phong có thể thực hiện cuộc chuyển biến cách mạng từ chủ nghĩa tư bản lên chủ nghĩa cộng sản là giai cấp công nhân"],
        dap_an: "D",
        giai_thich: "Hạn chế cơ bản của CNXH không tưởng là chưa phát hiện ra được lực lượng xã hội tiên phong có thể thực hiện cuộc chuyển biến cách mạng (GCCN)."
    },
    {
        cau: "Câu 43: Đặc điểm riêng của giai cấp công nhân Việt Nam so với giai cấp công nhân các nước trên thế giới là gì?",
        options: ["A. Đại biểu cho lực lượng sản xuất tiên tiến", "B. Lao động bằng phương thức công nghiệp", "C. Có ý thức tổ chức kỷ luật trong lao động", "D. Ra đời trước giai cấp tư sản"],
        dap_an: "D",
        giai_thich: "Giai cấp công nhân Việt Nam ra đời trước giai cấp tư sản Việt Nam."
    },
    {
        cau: "Câu 44: Đặc điểm nào khẳng định giai cấp công nhân là giai cấp tiến bộ nhất?",
        options: ["A. Có tinh thấn quốc tế trong sán", "B. Đại biểu cho phương thức sản xuất hiện đại", "C. Có số lượng đông", "D. Có tính tổ chức kỷ luật cao"],
        dap_an: "B",
        giai_thich: "GCCN là đại biểu cho phương thức sản xuất hiện đại (nền sản xuất đại công nghiệp)."
    },
    {
        cau: "Câu 45: Một trong những ý nghĩa của việc nghiên cứu, học tập chủ nghĩa xã hội khoa học về mặt lí luận:",
        options: ["A. Trang bị thế giới quan khoa học và nhân sinh quan cho sự nghiệp giải phóng nhân loại", "B. Giúp sinh viên có cơ sở khoa học để nhận thức và tiếp thu tri thức khoa học công nghệ - kỹ thuật hiện đại", "C. Giúp sinh viên có căn cứ nhận thức khoa học, phân tích đúng và đấu tranh chống lại những tuyên truyền chống phá của chủ nghĩa đế quốc và bọn phản động đối với nước ta", "D. Trang bị cho sinh viên nhận thức đúng về tình hình chính trị - tôn giáo hiện nay"],
        dap_an: "A",
        giai_thich: "(Ý nghĩa lý luận của CNXHKH là trang bị nền tảng tri thức lý luận chính trị - xã hội)."
    },
    {
        cau: "Câu 46: Tác phẩm nào sau đây của Mác và Ăngghen đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        options: ["A. Bộ Tư bản", "B. Hệ tư tưởng Đức.", "C. Tuyên ngôn của Đảng Cộng sản", "D. Bản thảo kinh tế - triết học năm 1844."],
        dap_an: "C",
        giai_thich: "Tuyên ngôn của Đảng Cộng sản được coi là tác phẩm đánh dấu sự ra đời của CNXHKH."
    },
    {
        cau: "Câu 47: Mục tiêu cao nhất của giai cấp công nhân khi thực hiện sứ mệnh lịch sử của mình là:",
        options: ["A. Giải phóng con người", "B. Giải phóng lực lượng sản xuất lạc hậu", "C. Giải phóng tư liệu sản xuất lỗi thời", "D. Giải phóng giai cấp công nhân"],
        dap_an: "A",
        giai_thich: "Mục tiêu cao nhất của CNXH là giải phóng con người toàn diện."
    },
    {
        cau: "Câu 48: Thông qua tác phẩm nào, C. Mác đã chuyển từ thế giới quan duy tâm sang thế giới quan duy vật, từ lập trường dân chủ cách mạng sang lập trường cộng sản chủ nghĩa?",
        options: ["A. Bộ Tư bản", "B. Tình cảnh nước Anh; Lược khảo khoa kinh tế chính trị", "C. Góp phần phê phán triết học pháp quyền của Hêghen - Lời nói đầu", "D. Bút ký t"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 49: Một trong những đặc điểm sứ mệnh lịch sử của giai cấp công nhân:",
        options: ["A. Xóa bỏ sự thống trị về xã hội tư tưởng", "B. Xóa bỏ triệt để tư hữu về tư liệu sản xuất", "C. Xóa bỏ sự thống trị về văn hóa", "D. Xóa bỏ sự thống trị về xã hộiMột trong những đặc điểm sứ mệnh lịch sử của giai cấp công nhân:"],
        dap_an: "B",
        giai_thich: "Xóa bỏ chế độ tư hữu về tư liệu sản xuất là nội dung cốt lõi của sứ mệnh lịch sử GCCN."
    },
    {
        cau: "Câu 50: Quyền lực nhà nước thống nhất, có sự phân cấp rõ ràng, có cơ chế phối hợp, nhịp nhàng giữa các cơ quan:",
        options: ["A. Ủy ban nhân dân các cấp từ Trung ương đến địa phương", "B. Các bộ, ngành từ Trung ương đến địa phương", "C. Lập pháp, hành pháp, tư pháp", "D. Các cơ quan trong chính phủ"],
        dap_an: "C",
        giai_thich: "Nhà nước pháp quyền XHCN tổ chức bộ máy đảm bảo nguyên tắc thống nhất quyền lực, có sự phân công, phối hợp, kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp."
    },
    {
        cau: "Câu 51: Đảng ta đề ra các quy chế dân chủ từ cơ sở đến Trung ương và trong các tổ chức chính trị - xã hội đều thực hiện phương châm:",
        options: ["A. Cải cách tổ chức và hoạt động của bộ máy nhà nước", "B. Dân biết, dân bàn, dân làm, dân kiểm tra", "C. Tập trung dân chủ cho giai cấp nông dân", "D. Nhà nước và nhân dân cùng làm Đáp án"],
        dap_an: "B",
        giai_thich: "Đảng ta thực hiện phương châm \"Dân biết, dân bàn, dân làm, dân kiểm tra\" trong các chế độ dân chủ từ cơ sở đến Trung ương."
    },
    {
        cau: "Câu 52: Đảng chủ trương, xây dựng nhà nước pháp quyền Việt Nam là:",
        options: ["A. Nhà nước thượng tôn pháp luật", "B. Nhà nước và pháp luật đảm bảo tính nghiêm minh", "C. Nhà nước của dân, do dân, vì dân", "D. Nhà nước luôn đảm bảo tính công bằng thông qua pháp luật"],
        dap_an: "C",
        giai_thich: "Bản chất Nhà nước pháp quyền XHCN Việt Nam là nhà nước của dân, do dân, vì dân."
    },
    {
        cau: "Câu 53: Mác và Ăngghen đã đưa ra dự báo khoa học về hai giai đoạn phát triển cao thấp khác nhau của hình thái kinh tế xã hội cộng sản chủ nghĩa, đó là gì?",
        options: ["A. Chủ nghĩa cộng sản và cộng sản chủ nghĩa", "B. Giai đoạn thấp của xã hội cộng sản và giai đoạn cao hơn của xã hội cộng sản", "C. Thời kỳ quá độ lên chủ nghĩa xã hội và chủ nghĩa xã hội", "D. Thời kỳ quá độ lên chủ nghĩa xã hội và chủ nghĩa cộng sản"],
        dap_an: "B",
        giai_thich: "Học thuyết hình thái kinh tế - xã hội của Mác phân kỳ xã hội cộng sản thành hai giai đoạn: giai đoạn thấp và giai đoạn cao."
    },
    {
        cau: "Câu 54: Mục tiêu dân chủ của chế độ xã hội chủ nghĩa Việt Nam là:",
        options: ["A. Phát huy sức mạnh của nhân dân, của toàn dân tộc", "B. Do nhân dân làm chủ, quyền lực thuộc về nhân dân", "C. Phải đi đôi với kỷ luật, kỷ cương", "D. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"],
        dap_an: "D",
        giai_thich: "Mục tiêu tổng quát của CNXH Việt Nam là: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
        cau: "Câu 55: Nền dân chủ xã hội chủ nghĩa mang bản chất của giai cấp nào?",
        options: ["A. Giai cấp nông dân", "B. Tầng lớp trí thức", "C. Quần chúng nhân dân án", "D. Giai cấp công nhân"],
        dap_an: "D",
        giai_thich: "Nền dân chủ XHCN mang bản chất giai cấp công nhân."
    },
    {
        cau: "Câu 56: Trong hoạt động của các cơ quan nhà nước, phải có sự kiểm soát lẫn nhau, tất cả vì:",
        options: ["A. Mục tiêu phục vụ nhân dân", "B. Mục tiêu bình đẳng trong xã hội", "C. Mục tiêu công bằng trong xã hội", "D. Mục tiêu tiến lên chủ nghĩa xã hội Đáp án"],
        dap_an: "A",
        giai_thich: "Trong hoạt động của các cơ quan nhà nước, cần có sự phân công, phối hợp, kiểm soát lẫn nhau, tất cả vì mục tiêu phục vụ nhân dân."
    },
    {
        cau: "Câu 57: Theo quan điểm của chủ nghĩa Mác - Lênin, loại hình quá độ gián tiếp từ chủ nghĩa tư bản lên chủ nghĩa cộng sản là:",
        options: ["A. Quá độ từ những nước chưa trải qua chủ nghĩa tư bản phát triển", "B. Quá độ từ những nước đã trải qua chủ nghĩa tư bản phát triển", "C. Quá độ từ xã hội thấp lên xã hội cao", "D. Quá độ từ chủ nghĩa xã hội lên chủ nghĩa cộng sản"],
        dap_an: "A",
        giai_thich: "(Quá độ gián tiếp là quá độ từ các xã hội tiền TBCN (như Việt Nam) lên CNXH, bỏ qua chế độ TBCN)."
    },
    {
        cau: "Câu 58: Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng Nhà nước xã hội chủ nghĩa được chia thành:",
        options: ["A. Chức năng giai cấp, chức năng xã hội", "B. Chức năng đối nội, chức năng đối ngoại", "C. Chức năng đối nội, chức năng chính trị", "D. Chức năng kinh tế, chức năng chính trị"],
        dap_an: "B",
        giai_thich: "(Chức năng nhà nước được chia thành chức năng đối nội và đối ngoại theo phạm vi tác động)."
    },
    {
        cau: "Câu 59: Điền từ vào chỗ trống để hoàn thiện luận điểm sau: \"Chỉ có giải phóng. thì mới giải phóng được dân tộc; cả hai cuộc giải phóng này chỉ có thể là sự nghiệp của chủ nghĩa cộng sản và cách mạng thế giới\" (Hồ Chí Minh).",
        options: ["A. Giai cấp nông dân", "B. Nhân dân lao động", "C. Giai cấp công nhân", "D. Giai cấp vô sản"],
        dap_an: "C",
        giai_thich: "(Luận điểm của Hồ Chí Minh về mối quan hệ giữa giải phóng giai cấp và giải phóng dân tộc)."
    },
    {
        cau: "Câu 60: Điền từ vào chỗ trống để hoàn thiện luận điểm của Mác: \"Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng từ xã hội nọ sang xã hội kiA. Thích ứng với thời kỳ ấy là một thời kỳ quá độ , và nhà nước của thời kỳ ấy không thể là cái gì khác hơn là nền chuyên chính cách mạng của giai cấp vô sản\"",
        options: ["A. Kinh tế", "B. Văn hóa", "C. Chính trị", "D. Xã hội"],
        dap_an: "C",
        giai_thich: "Luận điểm của Mác nói rõ đó là thời kỳ quá độ chính trị."
    },
    {
        cau: "Câu 61: Điền từ vào chỗ trống để hoàn thiện luận điểm của Mác: \"Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng từ xã hội nọ sang xã hội kiA. Thích ứng với thời kỳ ấy là một thời kỳ quá độ , và nhà nước của thời kỳ ấy không thể là cái gì khác hơn là nền chuyên chính cách mạng của giai cấp vô sản\"",
        options: ["A. Kinh tế", "B. Văn hóa", "C. Chính trị", "D. Xã hội"],
        dap_an: "C",
        giai_thich: "(Lặp lại Câu 60) Luận điểm của Mác nói rõ đó là thời kỳ quá độ chính trị."
    },
    {
        cau: "Câu 62: Một trong những nội dung phát huy dân chủ ở Việt Nam hiện nay:",
        options: ["A. Xây dựng nhà nước và hoàn thiện các hệ thống giám sát, phản biện xã hội", "B. Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa vững mạnh", "C. Xây dựng đảng và nâng cao vai trò của các tổ chức chính trị - xã hội", "D. Xây dựng Đảng cộng sản Việt Nam trong sạch, vững mạnh, điều kiện tiên quyết để xây dựng nền dân chủ XHCN"],
        dap_an: "D",
        giai_thich: "Xây dựng Đảng trong sạch, vững mạnh là điều kiện tiên quyết để xây dựng nền dân chủ XHCN."
    },
    {
        cau: "Câu 63: Đảng Cộng sản Việt Nam khẳng định đặc trưng của chủ nghĩa xã hội Việt Nam là:",
        options: ["A. Do nhân dân làm chủ", "B. Do tầng lớp trí thức làm chủ", "C. Do giai cấp công nhân làm chủ", "D. Do giai cấp nông dân làm chủ"],
        dap_an: "A",
        giai_thich: "Đặc trưng cơ bản của CNXH Việt Nam là do nhân dân làm chủ."
    },
    {
        cau: "Câu 64: Một trong những đóng góp khoa học có ý nghĩa phương pháp luận của học thuyết hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
        options: ["A. Đề ra chính sách kinh tế mới", "B. Chỉ ra tính tất yếu của sự nghiệp đổi mới, trước hết là đổi mới tư duy kinh tế", "C. Chỉ ra tính tất yếu của thời kỳ quá độ từ hình thái kinh tế - xã hội tư bản chủ nghĩa lên hình thái kinh tế - xã hội cộng sản chủ nghĩa", "D. Lý luận về học thuyết giá trị thặng dư"],
        dap_an: "C",
        giai_thich: "Học thuyết hình thái kinh tế - xã hội chỉ ra tính tất yếu của sự phát triển xã hội, bao gồm cả thời kỳ quá độ."
    },
    {
        cau: "Câu 65: Bản chất kinh tế của Nhà nước xã hội chủ nghĩa:",
        options: ["A. Quan hệ sản xuất tàn dư về tư liệu sản xuất", "B. Quan hệ công hữu về tư liệu sản xuất", "C. Quan hệ sản xuất cá thể về tư liệu sản xuất", "D. Quan hệ sản xuất tư nhân về tư liệu sản xuất"],
        dap_an: "B",
        giai_thich: "Bản chất kinh tế của Nhà nước XHCN dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu."
    },
    {
        cau: "Câu 66: Sự khác biệt so với các nhà nước pháp quyền khác, nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam:",
        options: ["A. Mang bản chất của giai cấp tiểu tư sản", "B. Mang bản chất của giai cấp công nhân", "C. Mang bản chất của tầng lớp tri thức", "D. Mang bản chất của nông dân"],
        dap_an: "B",
        giai_thich: "Nhà nước pháp quyền XHCN ở Việt Nam mang bản chất của giai cấp công nhân."
    },
    {
        cau: "Câu 67: Theo Mác và Ph.Ăngghen, tiền đề để xóa bỏ phương thức sản xuất tư bản chủ nghĩa là gì?",
        options: ["A. Liên minh công - nông bền chặt", "B. Sự ra đời của Đảng cộng sản", "C. Sự ra đời và phát triển của giai cấp công nhân", "D. Lý luận khoa học soi đường"],
        dap_an: "C",
        giai_thich: "Sự ra đời và phát triển của GCCN là lực lượng phá vỡ quan hệ sản xuất TBCN."
    },
    {
        cau: "Câu 68: Khi coi dân chủ là một giá trị xã hội mang tính toàn nhân loại, Hồ Chí Minh đã khẳng định:",
        options: ["A. Dân chủ là dân là chủ và dân làm chủ", "B. Dân chủ là dân làm chủ và dân là chủ", "C. Dân chủ là dân là dân chủ", "D. Dân chủ là dân là người chủ"],
        dap_an: "B",
        giai_thich: "Hồ Chí Minh khẳng định: \"Dân chủ là dân là chủ và dân làm chủ\"."
    },
    {
        cau: "Câu 69: Bản chất xã hội của dân chủ xã hội chủ nghĩa:",
        options: ["A. Luôn có sự kế thừa trong bất cứ thời kỳ nào của lịch sử", "B. Hình thành và phát triển dưới sự lãnh đạo của Đảng, có sự quản lý của nhà nước xã hội chủ nghĩa", "C. Hình thành và phát triển một cách tự giác, đặt dưới sự lãnh đạo của giai cấp công nhân thông qua tổ chức Đảng, có sự quản lý của nhà nước xã hội chủ nghĩa", "D. Là sự kết hợp hài hòa về lợi ích giữa cá nhân, tập thể và lợi ích toàn xã hội"],
        dap_an: "C",
        giai_thich: "(Bản chất xã hội của DCXHCN là sự kết hợp giữa tính giai cấp (GCCN thông qua Đảng) và tính nhân dân rộng rãi)."
    },
    {
        cau: "Câu 70: Theo Lênin, trong giai đoạn thấp của xã hội cộng sản chủ nghĩa, tình trạng người áp bức bóc lột người không còn nữa vì?",
        options: ["A. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về toàn dân", "B. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về xã hội", "C. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về Đảng cộng sản", "D. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về giai cấp công nhân và nhân dân lao động"],
        dap_an: "B",
        giai_thich: "Giai đoạn thấp (CNXH) xóa bỏ áp bức bóc lột vì đã thiết lập chế độ công hữu về các tư liệu sản xuất chủ yếu."
    },
    {
        cau: "Câu 71: Những tiền đề vật chất quan trọng cho sự ra đời của chủ nghĩa xã hội?",
        options: ["A. Sự phát triển của lực lượng sản xuất và sự hình thành giai cấp vô sản cách mạng", "B. Giai cấp công nhân trưởng thành và trở thành một lực lượng chính trị độc lập", "C. Sản xuất vật chất phát triển tạo ra một lượng hàng hóa khổng lồ", "D. Sự lớn mạnh của giai cấp vô sản và sự phát triển của quan hệ sản xuất tư bản chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Tiền đề vật chất là sự phát triển của lực lượng sản xuất và sự trưởng thành của GCCN (giai cấp vô sản)."
    },
    {
        cau: "Câu 72: Hình thức dân chủ nào mà thông qua đó nhân dân bằng hành động của mình thực hiện quyền làm chủ của nhà nước và xã hội?",
        options: ["A. Dân chủ gián tiếp", "B. Dân chủ trực tiếp", "C. Dân chủ hiến định", "D. Dân chủ bán trực tiếp"],
        dap_an: "B",
        giai_thich: "Hình thức dân chủ trực tiếp là hình thức thông qua hành động trực tiếp của nhân dân để thực hiện quyền làm chủ."
    },
    {
        cau: "Câu 73: Theo quan điểm của chủ nghĩa Mác - Lênin, điều kiện kinh tế cho sự ra đời của chủ nghĩa xã hội là:",
        options: ["A. Sự liên minh giữa giai cấp công nhân và giai cấp công nhân", "B. Sự trưởng thành cả về số lượng và chất lượng của giai cấp công nhân", "C. Sự ra đời của công nghiệp cơ khí", "D. Sự phát triển của giai cấp tư sản"],
        dap_an: "C",
        giai_thich: "(Sự ra đời và phát triển của công nghiệp cơ khí/đại công nghiệp là tiền đề kinh tế - kỹ thuật quan trọng)."
    },
    {
        cau: "Câu 74: Cơ sở xác lập lý luận về các hình thái kinh tế - xã hội là gì?",
        options: ["A. Chủ nghĩa duy vật", "B. Thế giới quan triết học duy vật", "C. Học thuyết giá trị thặng dư", "D. Chủ nghĩa duy vật lịch sử"],
        dap_an: "D",
        giai_thich: "Học thuyết hình thái kinh tế - xã hội là phát kiến của C. Mác dựa trên cơ sở Chủ nghĩa duy vật lịch sử."
    },
    {
        cau: "Câu 75: Tư tưởng của Mác và Ăngghen về những tiền đề vật chất, về mối quan hệ giữa điều kiện khách quan và nhân tố chủ quan của cách mạng vô sản đã được Lênin kế thừa, phát triển sâu sắc và sáng tạo trong học thuyết nào ?",
        options: ["A. Học thuyết về sứ mệnh lịch sử của giai cấp công nhân", "B. Học thuyết giá trị", "C. Học thuyết giá trị thặng dư", "D. Học thuyết Nhà nước và cách mạng"],
        dap_an: "D",
        giai_thich: "(Lênin phát triển sâu sắc về mối quan hệ giữa điều kiện khách quan/chủ quan và nhà nước trong Nhà nước và cách mạng )."
    },
    {
        cau: "Câu 76: Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực chính trị là gì?",
        options: ["A. Các giai cấp trong xã hội tồn tại với những lợi ích không còn đối kháng nhau", "B. Kết cấu giai cấp của xã hội đa dạng, phức tạp", "C. Kết cấu giai cấp của xã hội thuần nhất", "D. Không còn tồn tại giai cấp"],
        dap_an: "B",
        giai_thich: "Trong thời kỳ quá độ, kết cấu xã hội – giai cấp phức tạp, tồn tại nhiều giai cấp, tầng lớp khác nhau."
    },
    {
        cau: "Câu 77: Nội hàm cơ bản của dân chủ xã hội chủ nghĩa là gì?",
        options: ["A. Quyền lực thuộc về Giai cấp công nhân", "B. Toàn bộ quyền lực thuộc về nhân dân", "C. Quyền lực thuộc về người lãnh đạo", "D. Quyền lực thuộc về Giai cấp nông dân"],
        dap_an: "B",
        giai_thich: "Bản chất của nền dân chủ XHCN là quyền lực thuộc về nhân dân."
    },
    {
        cau: "Câu 78: Theo Mác và Ph.Ăngghen, điều kiện tiên quyết để giải phóng người lao động ra khỏi các quan hệ bóc lột tư bản chủ nghĩa là gì?",
        options: ["A. Tạo ra cách thức tổ chức lao động và kỷ luật lao động mới với năng suất cao", "B. Giải phóng và phát triển con người toàn diện", "C. Xóa bỏ chế độ sở hữu tư bản chủ nghĩa, đồng thời tiến hành thiết lập chế độ công hữu về các tư liệu sản xuất chủ yếu", "D. Tạo ra một nền sản xuất công nghiệp hiện đại Đáp án"],
        dap_an: "C",
        giai_thich: "Điều kiện để giải phóng là xóa bỏ chế độ sở hữu tư bản chủ nghĩa và thiết lập chế độ công hữu về tư liệu sản xuất chủ yếu."
    },
    {
        cau: "Câu 79: Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa:",
        options: ["A. Là chế độ công hữu về tư liệu sản xuất chủ yếu của toàn xã hội", "B. Là chế độ triệt tiêu sự cạnh tranh trong kinh tế, loại trừ sự bất công", "C. Là chế độ xã hội ở đó tài sản thuộc về một số người có quyền lực trong tay", "D. Là chế độ mà ở đó thực hiện sự phân chia tài sản theo năng lực lao động"],
        dap_an: "A",
        giai_thich: "Bản chất kinh tế của CNXH là dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu."
    },
    {
        cau: "Câu 80: Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa:",
        options: ["A. Là chế độ công hữu về tư liệu sản xuất chủ yếu của toàn xã hội", "B. Là chế độ triệt tiêu sự cạnh tranh trong kinh tế, loại trừ sự bất công", "C. Là chế độ xã hội ở đó tài sản thuộc về một số người có quyền lực trong tay", "D. Là chế độ mà ở đó thực hiện sự phân chia tài sản theo năng lực lao động"],
        dap_an: "A",
        giai_thich: "(Lặp lại Câu 79)."
    },
    {
        cau: "Câu 81: Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam do cơ quan nào lãnh đạo?",
        options: ["A. Quốc hội", "B. Mặt trật tổ quốc Việt Nam", "C. Đảng cộng sản Việt Nam", "D. Chính phủ"],
        dap_an: "C",
        giai_thich: "Nhà nước pháp quyền XHCN ở Việt Nam đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam."
    },
    {
        cau: "Câu 82: Hình thức dân chủ nào mà được thực hiện do nhân dân « ủy quyền », giao quyền lực của mình cho tổ chức mà nhân dân trực tiếp bầu ra?",
        options: ["A. Dân chủ gián tiếp", "B. Dân chủ hiến định", "C. Dân chủ trực tiếp", "D. Dân chủ bán trực tiếp"],
        dap_an: "A",
        giai_thich: "Dân chủ gián tiếp là hình thức dân chủ đại diện, được thực hiện do nhân dân \"ủy quyền\", giao quyền lực cho tổ chức do nhân dân bầu ra (ví dụ: Quốc hội)."
    },
    {
        cau: "Câu 83: Theo Mác và Ph.Ăngghen, chủ nghĩa xã hội phải được \"thoát thai\", \"lọt lòng\" từ xã hội nào?",
        options: ["A. Quốc gia chưa trải qua giai đoạn phát triển tư bản chủ nghĩa", "B. Phong kiến thuộc địa", "C. Chủ nghĩa tư bản", "D. Những nước tư bản trung bình hoặc kém phát triển"],
        dap_an: "C",
        giai_thich: "Theo quy luật phát triển, CNXH phải thoát thai từ lòng xã hội tư bản."
    },
    {
        cau: "Câu 84: Theo Hiến pháp 2013, hoạt động của Nhà nước được giám sát bởi nhân dân với phương châm:",
        options: ["A. Nhà nước lắng nghe ý kiến của nhân dân và chịu sự kiểm soát của nhân dân", "B. Nhà nước phục vụ nhân dân, gắn bó mật thiết với nhân dân, thực hiện đầy đủ các quyền làm chủ của nhân dân", "C. Dân biết, dân bàn, dân kiểm tra thông qua các tổ chức, các cá nhân được nhân dân ủy nhiệm", "D. Nhà nước phải được hoàn thiện bằng việc ban hành các cơ chế và biện pháp kiểm soát, ngăn ngừa các hiện tượng tiêu cực…"],
        dap_an: "A",
        giai_thich: "Nhà nước pháp quyền XHCN phải lắng nghe ý kiến của nhân dân, chịu sự giám sát của nhân dân."
    },
    {
        cau: "Câu 85: Bản chất chính trị của nền dân chủ xã hội chủ nghĩa:",
        options: ["A. Là nền dân chủ của giai cấp công nhân và nhân dân lao động thực hiện quyền lực đối với toàn xã hội", "B. Là nền dân chủ có tính nhân dân rộng rãi và tính dân tộc sâu sắc", "C. Là nền dân chủ của giai cấp công nhân thông qua chính đảng của nó để cải tạo xã hội cũ và xây dựng xã hội mới", "D. Là nền dân chủ phi giai cấp"],
        dap_an: "C",
        giai_thich: "Bản chất chính trị là quyền lực của GCCN thông qua Đảng Cộng sản để cải tạo xã hội."
    },
    {
        cau: "Câu 86: Một trong những nội dung tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền XHCN ở Việt Nam hiện nay:",
        options: ["A. Nâng cao vai trò quản lý của các tổ chức nhà nước", "B. Hoàn thiện các hệ thống giám sát, phản biện xã hội", "C. Cải cách thể chế và phương thức hoạt động của Nhà nước", "D. Xây dựng các tổ chức nhà nước vững mạnh Đáp án"],
        dap_an: "C",
        giai_thich: "Nội dung xây dựng và hoàn thiện Nhà nước pháp quyền XHCN bao gồm việc cải cách thể chế và phương thức hoạt động của Nhà nước."
    },
    {
        cau: "Câu 87: Tại sao dân chủ là phạm trù lịch sử?",
        options: ["A. Phản ánh lợi ích của giai cấp nắm giữ tư liệu sản xuất của xã hội", "B. Phản ánh lợi ích của các giai cấp trong xã hội.", "C. Phản ánh lợi ích của tầng lớp tri thức", "D. Phản ánh lợi ích của giai cấp tiểu tư sản"],
        dap_an: "A",
        giai_thich: "Dân chủ là một phạm trù lịch sử, gắn liền với sự ra đời, tồn tại và phát triển của nhà nước và phản ánh lợi ích của giai cấp nắm quyền."
    },
    {
        cau: "Câu 88: Điền từ vào chỗ trống để hoàn thiện luận điểm sau của Chủ tịch Hồ Chí Minh: \"Xây dựng chủ nghĩa xã hội là một cuộc đấu tranh cách mạng gian khổ, phức tạp và. \"?",
        options: ["A. Dài ngắn khác nhau tùy điều kiện mỗi nước", "B. Trải qua nhiều bước trung gian quá độ", "C. Khó khăn", "D. Lâu dài"],
        dap_an: "D",
        giai_thich: "(Câu nói nổi tiếng của Hồ Chí Minh là: \"Xây dựng chủ nghĩa xã hội là một cuộc đấu tranh cách mạng gian khổ, phức tạp và lâu dài \"."
    },
    {
        cau: "Câu 89: Trong các đặc trưng của chủ nghĩa xã hội, đặc trưng nào được xem là cơ bản nhất?",
        options: ["A. Cơ sở vật chất của chủ nghĩa xã hội phải được tạo ra bởi một nền sản xuất công nghiệp hiện đại", "B. Từng bước xóa bỏ chế độ sở hữu tư bản chủ nghĩa đồng thời thiết lập chế độ công hữu về các tư liệu sản xuất chủ yếu", "C. Tạo ra cách thức tổ chức và kỷ luật lao động mới", "D. Mục tiêu cao nhất của chủ nghĩa xã hội là giải phóng con người toàn diện"],
        dap_an: "B",
        giai_thich: "Chế độ công hữu về tư liệu sản xuất chủ yếu là đặc trưng kinh tế cơ bản nhất của CNXH (giai đoạn thấp của hình thái kinh tế - xã hội cộng sản chủ nghĩa)."
    },
    {
        cau: "Câu 90: Nội dung nào là cốt lõi và là nội dung quan trọng nhất của dân chủ?",
        options: ["A. Dân chủ là một phạm trù thuộc lĩnh vực chính trị; là một hình thức nhà nước", "B. Dân chủ là một phạm trù mang tính lịch sử", "C. Dân chủ là một giá trị xã hội mang tính toàn nhân loại", "D. Dân chủ là một hình thức của các tổ chức xã hội"],
        dap_an: "A",
        giai_thich: "Nội dung cốt lõi của dân chủ là nó là một phạm trù chính trị và là một hình thức nhà nước."
    },
    {
        cau: "Câu 91: Nhà nước xã hội chủ nghĩa trở thành công cụ quan trọng trong việc thực thi:",
        options: ["A. Quyền làm chủ của nhân dân", "B. Quyền làm chủ văn hóa của nhân dân", "C. Quyền làm chủ kinh tế của nhân dân", "D. Quyền làm chủ chính trị của nhân dân"],
        dap_an: "A",
        giai_thich: "Nhà nước XHCN là công cụ để nhân dân lao động thực hiện quyền lực đối với toàn xã hội, thực thi quyền làm chủ của nhân dân."
    },
    {
        cau: "Câu 92: Theo quan điểm của chủ nghĩa Mác - Lênin, điều kiện chính trị cho sự ra đời của chủ nghĩa xã hội là:",
        options: ["A. Sự phát triển của giai cấp tư sản", "B. Sự ra đời của công nghiệp cơ khí", "C. Sự trưởng thành cả về số lượng và chất lượng của giai cấp công nhân", "D. Sự liên minh giữa giai cấp công nhân và giai cấp công nhân"],
        dap_an: "C",
        giai_thich: "Sự trưởng thành của GCCN là tiền đề chính trị - xã hội quyết định sự ra đời của CNXH."
    },
    {
        cau: "Câu 93: Thực tiễn cho thấy, bản chất tốt đẹp và tính ưu việt của nền dân chủ xã hội chủ nghĩa ở Việt Nam ngày càng thể hiện:",
        options: ["A. Giá trị ưu việt của chủ nghĩa xã hội", "B. Giá trị tốt đẹp của xã hội tương lai", "C. Giá trị lấy dân làm gốc", "D. Giá trị văn hóa tinh thần Đáp án"],
        dap_an: "C",
        giai_thich: "Thực tiễn DCXHCN ở Việt Nam ngày càng thể hiện giá trị lấy dân làm gốc."
    },
    {
        cau: "Câu 94: Theo Lênin, mâu thuẫn nào đang nổi lên như là một trong những mâu thuẫn chủ đạo, tác động sâu sắc đến hầu hết các quan hệ kinh tế và chính trị trong thời đại ngày nay?",
        options: ["A. Mâu thuẫn giữa chủ nghĩa đế quốc và các quốc gia dân tộc bị xâm lược", "B. Mâu thuẫn giữa các nước tư bản với nhau", "C. Mâu thuẫn giữa giai cấp tư sản và giai cấp công nhân", "D. Mâu thuẫn giữa các nước giàu trong thế giới tư bản và các nước nghèo, lạc hậu"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 95: Các danh từ \"quá độ đặc biệt\", \"quá độ đặc biệt của đặc biệt\" do ai đưa ra?",
        options: ["A. Ph.Ăngghen", "B. Hồ Chí Minh", "C. Lênin", "D. Mác"],
        dap_an: "C",
        giai_thich: "(Đây là thuật ngữ thường được gán cho Lênin khi nói về các nước lạc hậu đi lên CNXH)."
    },
    {
        cau: "Câu 96: Theo quan điểm của chủ nghĩa Mác - Lênin, hình thái kinh tế - xã hội phát triển cao nhất, kết tinh của văn minh nhân loại là?",
        options: ["A. Xã hội Phong kiến", "B. Cộng sản chủ nghĩa", "C. Tư bản chủ nghĩa", "D. Xã hội chủ nghĩa"],
        dap_an: "B",
        giai_thich: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa (bao gồm CNXH và CNCS) là hình thái phát triển cao nhất."
    },
    {
        cau: "Câu 97: Nhiệm vụ trọng tâm cần thực hiện trong thời kỳ quá độ đi lên chủ nghĩa xã hội đối với những nước chưa trải qua quá trình công nghiệp hóa xã hội chủ nghĩa là gì?",
        options: ["A. Đẩy mạnh sự nghiệp công nghiệp hóa, hiện đại hóa", "B. Tiến hành công nghiệp hóa, hiện đại hóa nền kinh tế theo định hướng xã hội chủ nghĩa", "C. Phát triển nguồn nhân lực chất lượng cao phục vụ quá trình công nghiệp hóa, hiện đại hóa nền kinh tế theo định hướng xã hội chủ nghĩa", "D. Tiến hành công nghiệp hóa xã hội chủ nghĩa"],
        dap_an: "B",
        giai_thich: "Đối với Việt Nam (quá độ bỏ qua TBCN), nhiệm vụ trung tâm là phát triển lực lượng sản xuất, CNH, HĐH đất nước."
    },
    {
        cau: "Câu 98: Theo quan điểm của chủ nghĩa Mác - Lênin, loại hình quá độ trực tiếp từ chủ nghĩa tư bản lên chủ nghĩa cộng sản là:",
        options: ["A. Quá độ từ những nước chưa trải qua chủ nghĩa tư bản phát triển", "B. Quá độ từ những nước đã trải qua chủ nghĩa tư bản phát triển", "C. Quá độ từ chủ nghĩa xã hội lên chủ nghĩa cộng sản", "D. Quá độ từ xã hội thấp lên xã hội cao"],
        dap_an: "B",
        giai_thich: "Quá độ trực tiếp áp dụng cho các nước TBCN phát triển."
    },
    {
        cau: "Câu 99: Theo quan điểm của chủ nghĩa Mác - Lênin, nhà nước xã hội chủ nghĩa mang bản chất giai cấp công nhân được hiểu như thế nào?",
        options: ["A. Là một công cụ để bảo vệ lợi ích của nhân dân lao động bị áp bức", "B. Là một công cụ để bảo vệ lợi ích của giai cấp công nhân", "C. Là một công cụ để bảo vệ lợi ích của toàn dân", "D. Là một công cụ để bảo vệ lợi ích của dân tộc"],
        dap_an: "B",
        giai_thich: "(Mặc dù Nhà nước XHCN đại diện cho nhân dân, về bản chất giai cấp, nó mang bản chất GCCN)."
    },
    {
        cau: "Câu 100: Sự ra đời của nền dân chủ xã hội chủ nghĩa đánh dấu bước phát triển mới về:",
        options: ["A. Nội dung của dân chủ", "B. Giá trị của dân chủ", "C. Chất của dân chủ", "D. Lượng của dân chủ"],
        dap_an: "C",
        giai_thich: "Nền dân chủ XHCN là loại hình dân chủ cao hơn, đánh dấu bước phát triển về chất so với các hình thức dân chủ trước đó."
    },
    {
        cau: "Câu 101: Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực kinh tế là gì?",
        options: ["A. Tồn tại một nền kinh tế nhiều thành phần trong một hệ thống kinh tế quốc dân thống nhất", "B. Lực lượng sản xuất ở nhiều trình độ khác nhau", "C. Quan hệ sản xuất dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu", "D. Cơ sở vật chất kỹ thuật hiện đại"],
        dap_an: "A",
        giai_thich: "Trong thời kỳ quá độ, còn tồn tại nhiều hình thức sở hữu, nhiều thành phần kinh tế (kinh tế nhiều thành phần)."
    }
];

// --- DỮ LIỆU ĐỀ SỐ 3 ---
const de3 = [
    {
        cau: "Câu 1: Theo nghĩa rộng, CNXHKH là:",
        options: ["A. Bộ Tư bản của Marx", "B. Vũ khí lí luận của giai cấp công nhân", "C. Học thuyết về CNXH", "D. CNXHKH tức là Chủ nghĩa Marx, hay Chủ nghĩa Marx chính là CNXHKH"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 2: Theo nghĩa hẹp, CNXHKH là:",
        options: ["A. CNXHKH là 1 trong 3 bộ phận hợp thành Chủ nghĩa Marx - Lenin", "B. Sự kế thừa và phát triển những giá trị của lịch sử tư tưởng nhân loại, trên cơ sở thực tiễn của thời đại", "C. Vũ khí lí luận của giai cấp vô sản trong sự nghiệp đấu tranh giải phóng nhân dân lao động và giải phóng con người", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 3: CNXHKH – Chủ nghĩa Marx ra đời vào thế kỷ XIX đã:",
        options: ["A. Phản ánh được bản chất QHSX tư bản là chế độ bóc lột lao động làm thuê với mâu thuẫn cơ bản là mâu thuẫn giữa tư sản và vô sản", "B. Phản ánh được xu hướng biến đổi của xã hội tư bản", "C. Đáp ứng được nhu cầu của thực tiễn phong trào công nhân phải có lý luận soi đường", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 4: Chủ nghĩa xã hội không tưởng có những giá trị lớn là:",
        options: ["A. Phê phán lên án chế độ quân chủ chuyên chế và chế độ TBCN đầy bất công", "B. Chủ trương xoá bỏ tư hữu – nguyên nhân sinh ra áp bức bóc lột", "C. Đưa ra mô hình xã hội tương lai với cách tổ chức sản xuất và phân phối sản phẩm mới, khẳng định vai trò của công nghiệp và khoa học", "D. Các phương án đều đúng."],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 5: Ba phát kiến vĩ đại của Marx và Engels là:",
        options: ["A. Triết học - KTCT - CNXHKH", "B. Chủ nghĩa duy vật lịch sử - Học thuyết Giá trị thặng dư - Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân", "C. Thuyết tế bào - Định luật bảo toàn và chuyển hóa năng lượng - Thuyết tiến hóa", "D. Chủ nghĩa duy vật biện chứng - Học thuyết Giá trị thặng dư - Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 6: Nội dung nào sau đây không phải của tác phẩm Tuyên Ngôn của Đảng cộng sản?",
        options: ["A. Sự phù hợp giữa quan hệ sản xuất và lực lượng sản xuất tất yếu sẽ dẫn đến sự sụp đổ của chủ nghĩa tư bản và thắng lợi của chủ nghĩa xã hội", "C. Vấn đề dân tộc và cương lĩnh dân tộc", "D. Sứ mệnh lịch sử của giai cấp vô sản là “người đào mồ chôn chủ nghĩa tư bản” và “người xây dựng chủ nghĩa xã hội”"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 7: CNXHKH – Chủ nghĩa Marx ra đời vào thế kỷ XIX đã:",
        options: ["A. Phản ánh được bản chất QHSX tư bản là chế độ bóc lột lao động làm thuê với mâu thuẫn cơ bản là mâu thuẫn giữa tư sản và vô sản", "B. Phản ánh được xu hướng biến đổi của xã hội tư bản", "C. Đáp ứng được nhu cầu của thực tiễn phong trào công nhân phải có lý luận soi đường", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 8: Phát kiến SMLS của giai cấp công nhân, Marx và Engels đã làm cho CNXH từ không tưởng trở thành khoa học vì:",
        options: ["A. Chỉ ra con đường tất yếu hợp quy luật của lịch sử nhằm giải phóng con người là con đường cách mạng XHCN", "B. Chỉ ra được lực lượng xã hội thực hiện cuộc cách mạng đó là giai cấp vô sản/ giai cấp công nhân", "C. Khắc phục được hạn chế của CNXH không tưởng", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 9: Phát kiến thứ nhất: CNDVLS với “hòn đá tảng” là Học thuyết về Hình thái kinh tế xã hội đã:",
        options: ["A. Chỉ ra được bản chất, cấu trúc và quy luật vận động của xã hội loài người", "B. Là cơ sở triết học để khẳng định tính tất yếu diệt vong của chủ nghĩa tư bản và tất yếu ra đời của xã hội mới – xã hội XHCN", "C. Khẳng định sự sụp đổ của giai cấp tư sản và sự thắng lợi của SMLS của giai cấp công nhân là tất yếu như nhau", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 10: Đánh dấu sự ra đời của CNXHKH là tác phẩm nào?",
        options: ["A. Làm gì", "B. Tuyên ngôn của Đảng cộng sản", "C. Hệ tư tưởng Đức", "D. Phê phán triết học pháp quyền của Hegel"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 11: Nội dung Tác phẩm “Tuyên ngôn Đảng Cộng sản” gồm những nội dung:",
        options: ["A. Sự phù hợp giữa quan hệ sản xuất và lực lượng sản xuất tất yếu sẽ dẫn đến sự sụp đổ của chủ nghĩa tư bản và thắng lợi của chủ nghĩa xã hội", "B. Đấu tranh giai cấp là động lực thúc đẩy sự phát triển của xã hội loài người", "C. Sứ mệnh lịch sử của giai cấp vô sản là “người đào mồ chôn chủ nghĩa tư bản” và “người xây dựng chủ nghĩa xã hội”; nhấn mạnh vai trò của giai cấp vô sản và bộ tham mưu là Đảng Cộng sản", "D. Muốn giải phóng mình, giai cấp vô sản phải dùng bạo lực cách mạng để giành và nắm chính quyền, thiết lập sự đoàn kết quốc tế theo khẩu hiệu “Vô sản tất cả các nước, đoàn kết lại”", "E. Các phương án trên đều đúng"],
        dap_an: "E",
        giai_thich: ""
    },
    {
        cau: "Câu 12: Đối tượng của CNXHKH là:",
        options: ["A. Quan hệ giữa tư duy và tồn tại", "B. Các quan hệ sản xuất trong liên hệ với lực lượng sản xuất và kiến trúc thượng tầng", "C. Lĩnh vực tinh thần của xã hội", "D. Các vấn đề thuộc lĩnh vực chính trị xã hội của quá trình lịch sử từ CNTB lên CNXH"],
        dap_an: "D",
        giai_thich: ""
    },
    // Câu 13 bị thiếu trong nguồn
    {
        cau: "Câu 14: Khẩu hiệu “Vô sản tất cả các nước, đoàn kết lại” được đưa ra đầu tiên trong tác phẩm nào?",
        options: ["A. Những nhiệm vụ trước mắt của chính quyền Xô viết (Lenin)", "B. Chống Đuy Rinh (Engels)", "C. Bộ Tư bản (Marx)", "D. Tuyên ngôn của Đảng cộng sản (Marx – Engels)"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 15: Nội dung nào sau đây không phải của tác phẩm Tuyên Ngôn của Đảng cộng sản?",
        options: ["A. Đấu tranh giai cấp là động lực thúc đẩy sự phát triển của xã hội loài người", "B. Sứ mệnh lịch sử của giai cấp vô sản là “người đào mồ chôn chủ nghĩa tư bản” và “người xây dựng chủ nghĩa xã hội”", "C. Vấn đề dân tộc và cương lĩnh dân tộc", "D. Sự phù hợp giữa quan hệ sản xuất và lực lượng sản xuất tất yếu sẽ dẫn đến sự sụp đổ của chủ nghĩa tư bản và thắng lợi của chủ nghĩa xã hội"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 16: Hoàn thành câu dưới đây: Tác phẩm Tuyên ngôn của Đảng cộng sản ra đời năm 1848 do...... soạn thảo.",
        options: ["A. Lenin", "B. Engels", "C. K. Marx và F. Engels", "D. Marx"],
        dap_an: "C. K. Marx và F. Engels",
        giai_thich: ""
    },
    {
        cau: "Câu 17: Phát kiến thứ ba: Sứ mệnh lịch sử toàn thế giới của giai cấp công nhân:",
        options: ["A. Là sự tiếp tục phát triển lý luận của CNDVLS và học thuyết Giá trị thặng dư", "B. Chỉ ra: Sự chuyển biến của xã hội loài người lên CNCS là một cuộc cách mạng xã hội nhằm giải quyết mâu thuẫn giữa LLSX phát triển với QHSX TBCN", "C. Làm rõ được: Trong cuộc cách mạng vô sản, giai cấp công nhân vừa là lực lượng cơ bản, vừa là giai cấp lãnh đạo cách mạng", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 18: Các giai đoạn phát triển của CNXHKH gồm:",
        options: ["A. Giai đoạn Marx và Engels phát triển CNXHKH (1848 – 1895)", "B. Giai đoạn Lenin vận dụng và phát triển CNXHKH (1894 - 1921)", "C. Từ khi Lenin qua đời đến nay", "D. Tất cả các phương án trên"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 19: Các tác phẩm: Những nhiệm vụ trước mắt của chính quyền Xô viết (1918); Kinh tế chính trị trong thời đại Chuyên chính vô sản (1919); Bàn về thuế lương thực (1921) là của ai?",
        options: ["A. K.Marx", "B. Hồ Chí Minh", "C. V.I.Lenin", "D. F.Engels"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 20: Yêu cầu về phương pháp học tập môn CNXHKH là:",
        options: ["A. Gắn kết lí luận của CNXHKH với thực tiễn của đất nước và thời đại", "B. Hiểu đúng tinh thần, thực chất của lý luận; tránh bệnh kinh viện, giáo điều", "C. Học tập, nghiên cứu trong các mối quan hệ giữa các nguyên lý, các quy luật cơ bản…", "D. Thấy được tính hệ thống chặt chẽ, tính khoa học, phong phú, sâu sắc của chủ nghĩa Marx – Lenin.", "E. Các phương án trên đều đúng."],
        dap_an: "E",
        giai_thich: ""
    },
    {
        cau: "Câu 21: Chọn phương án sai: Yêu cầu về phương pháp học tập môn CNXHKH là:",
        options: ["A. Hiểu đúng tinh thần, thực chất của lý luận; tránh bệnh kinh viện, giáo điều.", "B. Tách rời lí luận của CNXHKH với thực tiễn của đất nước và thời đại", "C. Học tập, nghiên cứu trong các mối quan hệ giữa các nguyên lý, các quy luật cơ bản...", "D. Thấy được tính hệ thống chặt chẽ, tính khoa học, phong phú, sâu sắc của chủ nghĩa Marx - Lenin."],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 22: Giai cấp công nhân là gì?",
        options: ["A. Người lao động trong lĩnh vực công nghiệp", "B. Làm ra sản phẩm thặng dư", "C. Là nguồn gốc sự giàu có và phát triển xã hội", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 23: Đặc điểm của giai cấp công nhân là gì?",
        options: ["A. Là giai cấp có tính cách mạng triệt để nhất, có ý thức tổ chức kỷ luật cao nhất", "B. Là giai cấp tiên tiến có bản chất quốc tế", "C. Là giai cấp tiên tiến có tính cách mạng triệt để; có ý thức tổ chức kỉ luật cao nhất; có bản chất quốc tế", "D. Là giai cấp cách mạng nhất"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 24: Nội dung Sứ mệnh lịch sử của giai cấp công nhân là gì?",
        options: ["A. Xây dựng thành công Hình thái kinh tế - xã hội Cộng sản chủ nghĩa", "B. Xóa bỏ chế độ TBCN; xây dựng thành công xã hội XHCN và CSCN; giải phóng giai cấp mình đồng thời giải phóng nhân loại khỏi áp bức bóc lột", "C. Giải phóng giai cấp mình và giải phóng toàn nhân loại", "D. Thủ tiêu chế độ tư bản và tiền tư bản"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 25: Mục tiêu Sứ mệnh lịch sử của giai cấp công nhân là gì?",
        options: ["A. Thành lập nhà nước chuyên chính vô sản", "B. Xác lập vai trò lãnh đạo của giai cấp công nhân", "C. Xóa bỏ giai cấp, xóa bỏ tận gốc chế độ người bóc lột người, giải phóng nhân loại", "D. Xác lập vai trò lãnh đạo của Đảng cộng sản"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 26: Giai cấp công nhân là giai cấp tiên tiến nhất vì:",
        options: ["A. Họ là người lao động tạo ra của cải vật chất cho xã hội", "B. Họ là người bị bóc lột nặng nề nhất", "C. Họ là người tạo ra giá trị thặng dư", "D. Họ là người lao động trong lĩnh vực công nghiệp có trình độ ngày càng hiện đại – gắn với LLSX tiên tiến"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 27: Dưới CNTB, giai cấp công nhân",
        options: ["A. Là con đẻ của nền đại công nghiệp", "B. Là những người vô sản", "C. Là giai cấp cách mạng nhất", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 28: Trong 2 giai đoạn của quá trình thực hiện sứ mệnh lịch sử của giai cấp công nhân, chính quyền nhà nước là:",
        options: ["A. Mục tiêu của giai đoạn 1/ công cụ của giai đoạn 2", "B. Mục tiêu của cả 2 giai đoạn", "C. Đều là phương tiện để tiến hành cách mạng của giai cấp công nhân", "D. Mục tiêu của giai đoạn 2/ công cụ của giai đoạn 1"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 29: Hai thuộc tính cơ bản của giai cấp công nhân là",
        options: ["A. Đại diện cho QHSX TBCN/ Có lợi ích gắn với nền đại công nghiệp", "B. Đại diện cho LLSX tiên tiến/ Đại diện cho QHSX đương thời", "C. Đại diện cho nền đại công nghiệp/ Đại diện cho QHSX đương thời", "D. Đại diện cho LLSX tiên tiến/ Có lợi ích gắn với PTSX XHCN"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 30: Về phương thức lao động, giai cấp công nhân là:",
        options: ["A. Là những người không có TLSX", "B. Trực tiếp hay gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại và có tính xã hội hóa cao", "C. Là giai cấp đối kháng với giai cấp tư sản", "D. Các phương án trên đều đúng"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 31: Những đóng góp về lý luận của CNXHKH trong điều kiện Việt Nam từ 1986 đến nay là:",
        options: ["A. Độc lập dân tộc gắn liền với CNXH là tính quy luật của cách mạng trong thời đại ngày nay. Kết hợp chặt chẽ đổi mới kinh tế với đổi mới chính trị", "B. Xây dựng và phát triển nền kinh tế thị trường XHCN. Đảm bảo quan hệ giữa tăng trưởng phát triển kinh tế với tiến bộ và công bằng xã hội", "C. Phát huy dân chủ, xây dựng nhà nước pháp quyền XHCN Việt Nam, đảm bảo mọi quyền lực thuộc về nhân dân; Mở rộng quan hệ đối ngoại, hội nhập quốc tế, giữ vững chủ quyền và lợi ích quốc gia", "D. Giữ vững và tăng cường sự lãnh đạo của Đảng cộng sản Việt Nam là nhân tố đảm bảo thắng lợi của toàn bộ sự nghiệp đổi mới và phát triển đất nước", "E. Các phương án trên đều đúng"],
        dap_an: "E",
        giai_thich: ""
    },
    {
        cau: "Câu 32: Ngày nay xu hướng “trí thức hóa” giai cấp công nhân ngày càng tăng là do:",
        options: ["A. Giai cấp sản đã thay đổi phương thức bóc lột", "B. Sự thay đổi cơ cấu ngành nghề", "C. Tiến bộ của khoa học và công nghệ trong LLSX quy định", "D. Trình độ văn hóa xã hội phát triển"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 33: Mục tiêu giai đoạn thứ nhất của quá trình thực hiện sứ mệnh lịch sử của GCCN là gì?",
        options: ["A. Giành chính quyền từ tay các giai cấp thống trị", "B. Giai cấp công nhân phải tập hợp các tầng lớp nhân dân lao động thành lực lượng cách mạng mạnh mẽ để xây dựng thành công Hình thái kinh tế- xã hội CSCN", "C. Xây dựng thành công hình thái kinh tế - xã hội CSCN – xóa bỏ tận gốc chế độ người bóc lột người", "D. Giai cấp công nhân trở thành giai cấp lãnh đạo xã hội"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 34: Tác phẩm Nguồn gốc gia đình, chế độ tư hữu và nhà nước là của ai?",
        options: ["A. Marx – Engels", "B. Lenin", "C. Engels", "D. Hồ Chí Minh"],
        dap_an: "C",
        giai_thich: " (Suy luận từ lý thuyết)"
    },
    {
        cau: "Câu 35: Trong xã hội tư bản, Giai cấp công nhân",
        options: ["A. Gắn với LLSX không ngừng phát triển, họ là giai cấp đại biểu cho LLSX tiên tiến", "B. Là giai cấp đối lập với giai cấp tư sản về lợi ích căn bản và có nhu cầu xoá bỏ QHSX TBCN, họ là đại biểu cho PTSX mới", "C. Là giai cấp bị bóc lột nặng nề nhất", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    // Câu 36 bị thiếu trong nguồn
    {
        cau: "Câu 37: Các giai đoạn phát triển của CNXHKH gồm:",
        options: ["A. Giai đoạn Marx và Engels phát triển CNXHKH (1848 - 1895)", "B. Giai đoạn Lenin vận dụng và phát triển CNXHKH (1894 - 1921)", "C. Từ khi Lenin qua đời đến nay", "D. Tất cả các phương án trên"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 38: Các tác phẩm: Những nhiệm vụ trước mắt của chính quyền Xô viết (1918); Kinh tế chính trị trong thời đại Chuyên chính vô sản (1919); Bàn về thuế lương thực (1921) là của ai?",
        options: ["A. Hồ Chí Minh", "B. V.I.Lenin", "C. K.Marx", "D. F.Engels"],
        dap_an: "B",
        gai_thich: ""
    },
    {
        cau: "Câu 39: Yêu cầu về phương pháp học tập môn CNXHKH là:",
        options: ["A. Gắn kết lí luận của CNXHKH với thực tiễn của đất nước và thời đại", "B. Hiểu đúng tinh thần, thực chất của lý luận; tránh bệnh kinh viện, giáo điều", "C. Học tập, nghiên cứu trong các mối quan hệ giữa các nguyên lý, các quy luật cơ bản...; thấy được tính hệ thống chặt chẽ, tính khoa học, phong phú, sâu sắc của chủ nghĩa Marx - Lenin", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        gai_thich: ""
    },
    {
        cau: "Câu 40: Đặc điểm của giai cấp công nhân là gì?",
        options: ["A. Là giai cấp có tính cách mạng triệt để nhất, có ý thức tổ chức kỷ luật cao nhất", "B. Là giai cấp tiên tiến có bản chất quốc tế", "C. Là gia cấp tiên tiến có tính cách mạng triệt để; có ý thức tổ chức kỉ luật cao nhất; có bản chất quốc tế", "D. Là giai cấp cách mạng nhất"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 41: Chọn phương án đúng:",
        options: ["A. Marx đã viết tác phẩm: Nhà nước và cách mạng (1917)", "B. Marx và Engels đã viết các tác phẩm: Làm gì (1902); Một bước tiến, hai bước lùi (1904); Nhà nước và cách mạng (1917)", "C. Lenin đã viết các tác phẩm: Những người bạn dân là thế nào và họ đấu tranh chống những người dân chủ - xã hội ra sao (1894); Làm gì (1902); Một bước tiến, hai bước lùi (1904); Nhà nước và cách mạng (1917)", "D. Lenin đã viết: Nội chiến ở Pháp (1871); Phê phán cương lĩnh Gota (1875); Nguồn gốc của gia đình, của chế độ tư hữu và nhà nước (1884)"],
        dap_an: "C",
        gai_thich: ""
    },
    {
        cau: "Câu 42: Tìm phương án sai:",
        options: ["A. Giai cấp công nhân có chung lợi ích cơ bản với giai cấp tư sản", "B. Giai cấp công nhân bị bóc lột giá trị thặng dư", "C. Giai cấp công nhân là giai cấp bị áp bức bóc lột", "D. Giai cấp công nhân là những người không có TLSX"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 43: Giai cấp công nhân là giai cấp có tính tổ chức kỉ luật cao vì",
        options: ["A. Họ là người bị bóc lột nặng nề nhất", "B. Họ là người lao đông làm việc trong dây chuyền của nền đại công nghiệp", "C. Họ là người lao động tạo ra của cải vật chất cho xã hội", "D. Họ là người tạo ra giá trị thặng dư"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 44: Về địa vị kinh tế - xã hội, trong QHSX TBCN, giai cấp công nhân là",
        options: ["A. Những người không có TLSX để hiện thức hóa sức lao động của mình", "B. Những người phải bán sức lao động của mình cho nhà tư bản và bị bóc lột giá trị thặng dư", "C. Giai cấp có lợi ích đối lập với giai cấp tư sản", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 45: Phạm trù cơ bản nhất của CNXHKH là",
        options: ["A. Giai cấp công nhân", "B. Chuyên chính vô sản", "C. Sứ mệnh lịch sử của giai cấp công nhân", "D. Xã hội chủ nghĩa"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 46: Mục tiêu giai đoạn thứ hai của quá trình thực hiện sứ mệnh lịch sử của GCCN là gì?",
        options: ["A. Thiết lập chính quyền của GCCN, sử dụng nó làm công cụ để xây dựng thành công Hình thái kinh tế - xã hội CSCN – xóa bỏ tận gốc chế độ người bóc lột người", "B. Giành chính quyền từ tay các giai cấp bóc lột, thiết lập chính quyền của mình", "C. Giai cấp công nhân phải tập hợp các tầng lớp nhân dân lao động thành lực lượng cách mạng mạnh mẽ để xây dựng thành công Hình thái kinh tế- xã hội CSCN", "D. Giai cấp công nhân trở thành giai cấp lãnh đạo xã hội"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 47: Với Bộ Tư bản và các tác phẩm Ngày 18 tháng sương mù của Louis Bonaparte (1852), Chiến tranh nông dân Đức (1850), Cách mạng và phản cách mạng ở Đức (1851)…, Marx và Engels đã:",
        options: ["A. Làm rõ lý luận về giá trị thặng dư trong PTSX TBCN là cơ sở để làm rõ vai trò lịch sử của giai cấp công nhân", "B. Tổng kết kinh nghiệm các cuộc cách mạng ở Pháp, Đức", "C. Engels tiếp tục phát triển lý luận về cách mạng vô sản, lý luận cách mạng không ngừng, kết hợp phong trào vô sản với phong trào nông dân, vấn đề liên minh giai cấp trong cách mạng vô sản", "D. Các phương án đều đúng"],
        dap_an: "D",
        gai_thich: ""
    },
    {
        cau: "Câu 48: Chỉ ra: “Nhiệm vụ của CNXHKH là nghiên cứu những điều kiện lịch sử cho sự biến đổi xã hội và biến đổi giai cấp của quá trình đi lên CNXH của loài người” là kết quả nghiên cứu của Marx và Engels ở giai đoạn nào?",
        options: ["A. 1848 – 1871", "B. 1871 - 1895", "C. 1871 – 1875", "D. 1848 – 1884"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 49: Ngày nay giai cấp công nhân vẫn phải bán sức lao động chủ yếu là",
        options: ["A. Lao động chân tay", "B. Lao động trí óC", "C. Cả lao động chân tay và lao động trí óc với giá trị ngày càng lớn", "D. Các phương án đều đúng"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 50: Các tác phẩm: Những người bạn dân là thế nào và họ đấu tranh chống những người dân chủ - xã hội ra sao (1894); Làm gì (1902); Một bước tiến, hai bước lùi (1904); Nhà nước và cách mạng (1917) được Lenin viết vào thời gian nào?",
        options: ["A. Sau năm 1917", "B. Thời kỳ xây dựng CNXH ở Liên Xô0", "C. Trước Cách mạng tháng 10", "D. Sau Cách mạng tháng 10"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 51: Giai cấp công nhân có khả năng đoàn kết với các giai cấp và tầng lớp lao động khác vì",
        options: ["A. Họ đều mâu thuẫn với giai cấp tư sản", "B. Giai cấp công nhân là giai cấp đại diện cho PTSX mới của thời đại", "C. Giai cấp công nhân và họ có lợi ích cơ bản thống nhất với nhau", "D. Suy đến cùng thì dưới CNTB các giai cấp lao động đều bị bóc lột"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 52: Vai trò của Đảng cộng sản là?",
        options: ["A. Lãnh đạo toàn bộ quá trình thực hiện Sứ mệnh lịch sử của giai cấp công nhân", "B. Dựa trên lí luận của Chủ nghĩa Marx - Lenin và thực tiễn cách mạng, ĐCS phải đề ra đường lối, mục tiêu cách mạng đúng đắn", "C. Thực hiện tuyên truyền, giác ngộ giai cấp công nhân và nhân dân lao động – biến lí luận cách mạng thành phong trào cách mạng", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 53: Đường lối cách mạng của đảng cộng sản được xây dựng trên cơ sở nào?",
        options: ["A. Lí luận khoa học của Chủ nghĩa Marx - Lenin", "B. Nhu cầu của thực tiễn cách mạng ở mỗi nước trong những thời gian nhất đinh", "C. Lí luận khoa học của Chủ nghĩa Marx - Lenin và nhu cầu thực tiễn cách mạng ở từng thời kỳ", "D. Phương pháp luận khoa học của Chủ nghĩa Marx – Lenin"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 54: Cách mạng XHCN là …thực hiện sứ mệnh lịch sử của giai cấp công nhân.",
        options: ["A. Mục tiêu", "B. Con đường", "C. Phương thức", "D. Kết quả"],
        dap_an: "C",
        gai_thich: ""
    },
    {
        cau: "Câu 55: Nguyên nhân sâu xa của cách mạng xã hội chủ nghĩa là:",
        options: ["A. Mâu thuẫn giữa tư sản và vô sản", "B. Mâu thuẫn giữa LLSX có tính xã hội hóa ngày càng cao với QHSX dựa trên sở hữu tư nhân TBCN về TLSX", "C. Do sự phát triển của giai cấp công nhân", "D. Do phong trào công nhân phát triển"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 56: Nội dung của cách mạng XHCN trên lĩnh vực chính trị là",
        options: ["A. Phát triển kinh tế, nâng cao đời sống nhân dân", "B. Đưa nhân dân lao động lên địa vị làm chủ xã hội mới", "C. Giành chính quyền từ tay các giai cấp thống trị", "D. Nâng cao trình độ văn hóa cho nhân dân"],
        dap_an: "C",
        gai_thich: ""
    },
    {
        cau: "Câu 57: Lý luận về cách mạng dân chủ tư sản kiểu mới do Lenin đưa ra:",
        options: ["A. Là sự kế thừa và phát triển Tư tưởng cách mạng không ngừng của Marx - Engels", "B. Chỉ ra tính chất nhân dân cách mạng dân chủ tư sản đầu thế kỷ XX", "C. Chỉ ra khả năng nắm vai trò lãnh đạo của giai cấp công nhân trong cách mạng dân chủ tư sản", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 58: Đặc điểm nào sau đây không phải của GCCN Việt Nam",
        options: ["A. Ra đời sớm", "B. Trình độ thấp", "C. Số lượng ít", "D. Sớm trở thành lực lượng lãnh đạo cách mạng"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 59: Nội dung Tư tưởng Cách mạng không ngừng do Marx và Engels nêu ra khi tổng kết kinh nghiệm cách mạng ở Pháp là:",
        options: ["A. Cách mạng không ngừng là quá trình đấu tranh giai cấp quyết liệt, kinh qua các giai đoạn khác nhau", "B. Mỗi giai đoạn có những yêu cầu cụ thể tạo tiền đề cho giai đoạn phát triển tiếp theo", "C. Các phương án đều đúng", "D. Trong các quốc gia còn tồn tại chế độ quân chủ, lúc đầu GCCN là lực lượng tham gia cuộc cách mạng dân chủ tư sản đánh đổ chế độ quân chủ, sau đó GCCN liên minh với nông dân và các tầng lớp lao động khác tiếp tục cuộc đấu tranh chống lại giai cấp tư sản"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 60: Đảng cộng sản lãnh đạo giai cấp công nhân thực hiện Sứ mệnh lịch sử của giai cấp công nhân bằng cách nào?",
        options: ["A. Trên cơ sở thực tiễn cách mạng, lí luận khoa học của Chủ nghĩa Marx - Lenin đưa ra đường lối chiến lược sách lược đúng đắn", "B. Tuyên truyền giác ngộ giai cấp công nhân và nhân dân lao động – biến lí luận cách mạng thành thực tiễn cách mạng", "C. Xây dựng lực lượng cách mạng của quần chúng nhân dân lao động dưới sự lãnh đạo của Đảng cộng sản để tiến hành cách mạng XHCN", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 61: Xã hội Xã hội chủ nghĩa là gì?",
        options: ["A. Một hình thái kinh tế xã hội ra đời sau chủ nghĩa tư bản kế thừa được những thành tựu của CNTB", "B. Phát triển cao hơn CNTB do có lực lượng sản xuất hiện đại và NSLĐ cao hơn CNTB", "C. Khác với CNTB vì nó dựa trên chế độ công hữu những TLSX chủ yếu", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 62: Điều kiện ra đời của Hình thái KT-XH Xã hội chủ nghĩa?",
        options: ["A. LLSX phát triển rất cao dựa trên cơ sở lao động công nghiệp đã được tri thức hóa", "B. Có nhà nước XHCN", "C. Có đảng cộng sản lãnh đạo", "D. Có nền dân chủ XHCN"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 63: Sự ra đời Hình thái kinh tế xã hội CSCN theo dự báo của Marx và Engels gồm mấy giai đoạn?",
        options: ["A. 2", "B. 3", "C. 4", "D. 5"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 64: Sự khác nhau của hai giai đoạn XHCN và CSCN là",
        options: ["A. Khác nhau về hình thức tổ chức xã hội", "B. Khác nhau về hình thức phân phối của cải xã hội", "C. Khác nhau về các hình thức sở hữu", "D. Khác nhau về hình thức liên minh giai cấp"],
        dap_an: "B",
        gai_thich: ""
    },
    {
        cau: "Câu 65: Thời kì quá độ lên CNXH là gì?",
        options: ["A. Là một thời kì cải biến cách mạng lâu dài trong lịch sử", "B. Thời kỳ quá độ lên CNXH bắt đầu từ khi giai cấp công nhân đã có chính quyền trong tay", "C. Thời kỳ quá độ lên CNXH kết thúc khi HTKTXH XHCN và CSCN được xây dựng xong", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 66: Sự quá độ về Chính trị trong thời kỳ quá độ lên CNXH thể hiện ở",
        options: ["A. Nhà nước CCVS (nhà nước XHCN) được thiết lập củng cố và ngày càng hoàn thiện", "B. Nền kinh tế nhiều thành phần – phương thức phù hợp của QHSX tạo điều kiện phát triển LLSX", "C. Cơ cấu xã hội – giai cấp phức tạp trong đó vẫn có những giai cấp mà lợi ích căn bản đối lập nhau", "D. Sự đan xen và đấu tranh gay gắt giữa các hệ tư tưởng khác nhau, đối lập nhau"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 67: Đảng ta lựa chọn con đường đi lên CNXH là phù hợp với xu thế phát triển của lịch sử và phù hợp với lợi ích của dân tộc, của nhân dân lao động Việt Nam vì",
        options: ["A. Xu thế phát triển tất yếu của lịch sử lên CNXH là do sự phát triển khách quan của LLSX quy định", "B. Lợi ích của dân tộc VN ta là độc lập dân tộc và phát triển đất nước phồn vinh", "C. Lợi ích của nhân dân VN là được ấm no, tự do, hạnh phúc, được sống trong hòa bình", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 68: Mục tiêu tổng quát của thời ký quá độ lên CNXH ở Việt Nam là",
        options: ["A. Xây dựng xong về cơ bản những cơ sở kinh tế của CNXH", "B. Hoàn thiện Kiến trúc thượng tầng XHCN về chính trị và tư tưởng văn hóa phù hợp", "C. Làm đất nước ta trở thành nước XHCN phồn vinh", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 69: Mục tiêu tổng quát của thời ký quá độ lên CNXH ở Việt Nam là",
        options: ["A. Xây dựng xong về cơ bản những cơ sở kinh tế của CNXH", "B. Hoàn thiện Kiến trúc thượng tầng XHCN về chính trị và tư tưởng văn hóa phù hợp", "C. Làm đất nước ta trở thành nước XHCN phồn vinh", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 70: Quá độ lên CNXH ở Việt nam là quá độ gián tiếp - quá độ “bỏ qua” chế độ TBCN đi lên CNXH tức là",
        options: ["A. Bỏ qua nhiệm vụ phát triển LLSX", "B. Bỏ qua toàn bộ hình thái KT-XH TBCN", "C. Thừa nhận vai trò lãnh đạo của giai cấp tư sản đối với xã hội", "D. Bỏ qua vai trò thống trị của giai cấp tư sản trong kiến trúc thượng tầng; thừa nhận sự tồn tại của các thành phần kinh tế, các hình thức sở hữu trong cơ sở hạ tầng nhằm tạo ra những hình thức phù hợp cho LLSX phát triển"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 71: Sự quá độ về Kinh tế trong thời kỳ quá độ lên CNXH thể hiện ở",
        options: ["A. Cơ cấu xã hội - giai cấp phức tạp trong đó vẫn có những giai cấp mà lợi ích căn bản đối lập nhau", "B. . Sự khác biệt giữa thành thị và nông thôn, giữa lao động trí óc và lao động chân tay", "C. Nền kinh tế nhiều thành phần - phương thức phù hợp của QHSX tạo điều kiện phát triển LLSX", "D. Sự đan xen và đấu tranh gay gắt giữa các hệ tư tưởng khác nhau, đối lập nhau"],
        dap_an: "C",
        giai_thich: ""
    },
    // Câu 72 bị thiếu trong nguồn
    {
        cau: "Câu 73: Điều kiện ra đời của Hình thái KT-XH Xã hội chủ nghĩa?",
        options: ["A. LLSX phát triển rất cao dựa trên cơ sở lao đông công nghiệp đã được tri thức hóa", "B. Có đảng cộng sản lãnh đạo", "C. Có nền dân chủ XHCN", "D. Có nhà nước XHCN"],
        dap_an: "D",
        gai_thich: ""
    },
    {
        cau: "Câu 74: Luận điểm sau là của ai: “Các dân tộc đều sẽ đi lên CNXH là điều không tránh khỏi, nhưng các dân tộc tiến tới CNXH không hoàn toàn giống nhau”",
        options: ["A. K.Marx", "B. Hồ Chí Minh", "C. F.Engels", "D. Lenin"],
        dap_an: "D",
        gai_thich: ""
    },
    {
        cau: "Câu 75: Thời kì quá độ lên CNXH là gì?",
        options: ["A. Là một thời kì cải biến cách mạng lâu dài trong lịch sử", "B. Thời kỳ quá độ lên CNXH bắt đầu từ khi giai cấp công nhân đã có chính quyền trong tay", "C. Thời kỳ quá độ lên CNXH kết thúc khi HTKTXH XHCN và CSCN được xây dựng xong", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 76: Sự khác nhau của hai giai đoạn XHCN và CSCN là",
        options: ["A. Khác nhau về hình thức tổ chức xã hộ", "B. Khác nhau về hình thức liên minh giai cấp", "C. Khác nhau về hình thức phân phối của cải xã hội", "D. Khác nhau về các hình thức sở hữu"],
        dap_an: "C",
        gai_thich: ""
    },
    {
        cau: "Câu 77: Xã hội Xã hội chủ nghĩa là gì?",
        options: ["A. Một hình thái kinh tế xã hội ra đời sau chủ nghĩa tư bản kế thừa được những thành tựu của CNTB", "B. Phát triển cao hơn CNTB do có lực lượng sản xuất hiện đại và NSLĐ cao hơn CNTB", "C. Khác với CNTB vì nó dựa trên chế độ công hữu những TLSX chủ yếu", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 78: Đảng ta lựa chọn con đường đi lên CNXH là phù hợp với xu thế phát triển của lịch sử và phù hợp với lợi ích của dân tộc, của nhân dân lao động Việt Nam vì",
        options: ["A. Xu thế phát triển tất yếu của lịch sử lên CNXH là do sự phát triển khách quan của LLSX quy định", "B. Lợi ích của dân tộc VN ta là độc lập dân tộc và phát triển đất nước phồn vinh", "C. Lợi ích của nhân dân VN là được ấm no, tự do, hạnh phúc, được sống trong hòa bình", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 79: Đặc trưng cơ bản của xã hội XHCN là gì?",
        options: ["A. Cơ sở vật chất-kỹ thuật là nền sản xuất công nghiệp hiện đại; XHXHCN đã xoá bỏ chế độ tư hữu TBCN, thiết lập chế độ công hữu về những tư liệu sản xuất chủ yếu", "B. XHXHCN tạo ra cách tổ chức lao động và kỷ luật lao động mới; XHXHCN thực hiện nguyên tắc phân phối theo lao động - đây là nguyên tắc phân phối cơ bản nhất", "C. Nhà nước mang bản chất giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc; thực hiện quyền lực và lợi ích của nhân dân; Xã hội XHCN là chế độ đã giải phóng con người thoát khỏi áp bức bóc lột, thực hiện công bằng, bình đẳng tiến bộ xã hội, tạo những điều kiện cơ bản để con người phát triển toàn diện", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 80: Chọn phương án sai: Thời kì quá độ lên CNXH là gì?",
        options: ["A. Thời kỳ quá độ lên CNXH kết thúc khi HTKTXH XHCN và CSCN được xây dựng xong", "B. Thời kỳ quá độ lên CNXH bắt đầu từ khi giai cấp công nhân đã có chính quyền trong tay", "C. Là một thời kì cải biến cách mạng lâu dài trong lịch sử", "D. Là thời kỳ đấu tranh giành chính quyền từ tay giai cấp tư sản"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 81: Dự báo của K.Marx và F.Engels về sự ra đời Hình thái kinh tế xã hội cộng sản chủ nghĩa như một xu hướng tất yếu của lịch sử loài người là",
        options: ["A. Dựa trên cơ sở khoa học của Chủ nghĩa Duy vật lịch sử", "B. Kết quả phân tích khoa học về sự vận động xã hội theo Học thuyết về hình thái kinh tế xã hội", "C. Dựa trên sự phân tích khoa học về hình thái kinh tế - xã hội TBCN", "D. Tất cả các phương án trên"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 82: Hình thái kinh tế xã hội CSCN sẽ bắt đầu từ khi nào?",
        options: ["A. Từ khi giai cấp công nhân thực hiện sứ mệnh lịch sử của mình", "B. Từ khi chế độ công hữu những TLSX chủ yếu xuất hiện", "C. Từ khi Đảng cộng sản ra đời", "D. Từ khi chính quyền thuộc về tay giai cấp công nhân"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 83: Chọn phương án sai: Điều kiện ra đời của Hình thái KT-XH Xã hội chủ nghĩa là",
        options: ["A. LLSX phát triển rất cao dựa trên cơ sở lao đông công nghiệp đã được tri thức hóa", "B. Có nền dân chủ XHCN", "C. Có nhà nước XHCN", "D. Có đảng cộng sản lãnh đạo"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 84: Hoàn thành câu dưới đây: Xã hội XHCN là giai đoạn ...... của hình thái kinh tế xã hội CSCN. Trong giai đoạn này việc phân phối dựa trên nguyên tắc ............",
        options: ["A. THẤP; LÀM THEO NĂNG LỰC, HƯỞNG THEO LAO ĐỘNG", "B. CAO; LÀM THEO NĂNG LỰC, HƯỞNG THEO LAO ĐỘNG", "C. THẤP; LÀM THEO NĂNG LỰC, HƯỞNG THEO NHU CẦU", "D. CAO; LÀM THEO NĂNG LỰC, HƯỞNG THEO NHU CẦU"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 85: Nhà nước XHCN là ...... để giai cấp công nhân hoàn thành Sứ mệnh lịch sử của mình.",
        options: ["A. Kết quả", "B. Nguyên nhân", "C. Công cụ", "D. Mục tiêu"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 86: Hình thái KT- XH XHCN có",
        options: ["A. LLSX phát triển rất cao đủ thỏa mãn mọi nhu cầu về vật chất của xã hội", "B. QHSX dựa trên chế độ công hữu những TLSX chủ yếu", "C. Kiến trúc thượng tầng do nhân dân lao động làm chủ thực sự", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 87: Ở Việt Nam, lựa chọn sự quá độ đi lên CNXH bỏ qua chế độ TBCN là một tất yếu vì:",
        options: ["A. Xuất phát từ mong muốn chủ quan của Đảng cộng sản", "B. Xã hội XHCN là 1 tất yếu của lịch sử", "C. Là sự lựa chọn phù hợp với quy luật khách quan của lịch sử, phù hợp với lợi ích của nhân dân lao động và lợi ích của dân tộc Việt Nam", "D. Các phương án trên đều đúng"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 88: Dự báo của K.Marx và F.Engels về sự ra đời Hình thái kinh tế xã hội cộng sản chủ nghĩa như một xu hướng tất yếu của lịch sử loài người là",
        options: ["A. Dựa trên cơ sở khoa học của Chủ nghĩa Duy vật lịch sử", "B. Kết quả phân tích khoa học về sự vận động xã hội theo Học thuyết về hình thái kinh tế xã hội", "C. Dựa trên sự phân tích khoa học về hình thái kinh tế - xã hội TBCN", "D. Tất cả các phương án trên"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 89: Nhà nước là gì?",
        options: ["A. Tổ chức chính trị của giai cấp thống trị về kinh tế nhằm bảo vệ trật tự hiện hành và đàn áp sự phản kháng của các giai cấp khác", "B. Là sản phẩm của xã hội có giai cấp", "C. Là công cụ để tổ chức và quản lý xã hội", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 90: Chức năng của nhà nước là gì?",
        options: ["A. Trấn áp bạo lực", "B. Tổ chức, quản lý xã hội và trấn áp bạo lực", "C. Giáo dục tư tưởng", "D. Ban hành luật pháp"],
        dap_an: "B",
        giai_thich: ""
    },
    // Câu 91 bị thiếu trong nguồn
    {
        cau: "Câu 92: Nhà nước XHCN là gì?",
        options: ["A. Là nhà nước của nhân dân, do nhân dân vì nhân dân", "B. Là công cụ của giai cấp công nhân và nhân dân lao động để tiến hành xây dựng CNXH thành công", "C. Đảm bảo mọi quyền lực thuộc về nhân dân dưới sự lãnh đạo của Đảng cộng sản", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 93: Nhà nước XHCN thực hiện chức năng quản lí xã hội của mình bằng:",
        options: ["A. Thuyết phục, nêu gương", "B. Hiến pháp, Pháp luật", "C. Văn hóa nghệ thuật", "D. Đường lối, chủ trương"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 94: Dân chủ là gì?",
        options: ["A. Hệ giá trị phản ánh trình độ tiến bộ xã hội", "B. Là 1 trong 2 mặt bản chất của nhà nước", "C. Là kết quả của cuộc đấu tranh chống áp bức bóc lột, bất công của nhân dân lao động trong lịch sử", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 95: Nhà nước XHCN là gì?",
        options: ["A. Là nhà nước của nhân dân, do nhân dân vì nhân dân", "B. Là công cụ của giai cấp công nhân và nhân dân lao động để tiến hành xây dựng CNXH thành công", "C. Đảm bảo mọi quyền lực thuộc về nhân dân dưới sự lãnh đạo của Đảng cộng sản", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 96: Nhà nước xuất hiện do nhu cầu tất yếu nào?",
        options: ["A. Do ý muốn chủ quan của người đứng đầu thị tộc, bộ lạc", "B. Do nhu cầu tổ chức và quản lý xã hội và bảo vệ lợi ích của giai cấp thống trị về kinh tế", "C. Do nhu cầu bảo vệ lợi ích của giai cấp thống trị về kinh tế g đế", "D. Do ý muốn của Thượn"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 97: Dân chủ XHCN có cơ sở kinh tế là?",
        options: ["A. Quyền lực nhà nước thuộc về nhân dân", "B. Chế độ công hữu về TLSX chủ yếu", "C. Sự kết hợp hài hòa các lợi ích", "D. Nhân dân tham gia vào công việc của nhà nước"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 98: Tìm phương án sai:",
        options: ["A. Nhà nước XHCN có sự thống nhất 3 quyền: Lập pháp, hành pháp, tư pháp", "B. Nhà nước XHCN là công cụ của giai cấp công nhân và NDLĐ để tiến hành xây dựng CNXH thành công", "C. Thực hiện tam quyền phân lập", "D. Nhà nước XHCN là nhà nước của nhân dân, do nhân dân vì nhân dân"],
        dap_an: "C",
        gai_thich: ""
    },
    {
        cau: "Câu 99: Bản chất của dân chủ XHCN thể hiện trên các mặt:",
        options: ["A. Thuần túy trên lĩnh vực chính trị xã hội", "B. Chính trị và kinh tế", "C. Chính trị, kinh tế, văn hóa, xã hội", "D. Cơ sở hạ tầng và kiến trúc thượng tầng"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 100: Hoàn thành câu dưới đây: Dân chủ là một thể chế mà ...... xây dựng hay thay đổi luật pháp và cơ cấu chính quyền đều thuộc về ......,",
        options: ["A. QUYỀN; NGƯỜI DÂN", "B. QUYỀN; GIAI CẤP CÔNG NHÂN", "C. NGHĨA VỤ; NGƯỜI DÂN", "D. MỤC TIÊU; GIAI CẤP CÔNG NHÂN"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 101: Chức năng của nhà nước là gì?",
        options: ["A. Trấn áp bạo lực", "B. Tổ chức, quản lý xã hội và trấn áp bạo lực", "C. Ban hành luật pháp", "D. Giáo dục tư tưởng"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 102: Hoàn thành câu dưới đây: Dân chủ XHCN vừa là ...... , vừa là ...... của SỰ NGHIỆP XÂY DỰNG CNXH",
        options: ["A. MỤC TIÊU; ĐỘNG LỰC", "B. NỀN TẢNG; PHƯƠNG THỨC", "C. KẾT QUẢ; NGUYÊN NHÂN", "D. MỤC TIÊU; KẾT QUẢ"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 103: Hoàn thành câu dưới đây: Nhà nước XHCN thực hiện chức năng đối ngoại nhằm ...... và mở rộng quan hệ ...... với các nước trên thế giới.,",
        options: ["A. BẢO VỆ LỢI ÍCH QUỐC GIA; HỢP TÁC HỮU NGHỊ", "B. PHÁT TRIỂN KINH TẾ; HỢP TÁC KINH TẾ", "C. GIẢI QUYẾT TRANH CHẤP; HỮU NGHỊ", "D. PHÒNG NGỪA CHIẾN TRANH; HỢP TÁC HỮU NGHỊ"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 104: Nhà nước XHCN là gì?",
        options: ["A. Là tổ chức chính trị thông qua đó Đảng của giai cấp công nhân thực hiện vai trò lãnh đạo của mình đối với toàn xã hội", "B. Là bộ phận của kiến trúc thượng tầng XHCN", "C. Là nhà nước kiểu mới của giai cấp công nhân và nhân dân lao động", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 105: Nhà nước XHCN giống các kiểu nhà nước khác trong lịch sử như thế nào?",
        options: ["A. Có một hệ thống luật pháp thể chế hóa lợi ích của giai cấp cầm quyền và quản lý dân cư trên một vùng lãnh thổ nhất định", "B. Có một hệ thống các cơ quan hành chính quản lý từ trung ương đến địa phương. Có hệ thống quân đội cảnh sát chuyên dùng nhằm bảo vệ xã hội", "C. Có một chế độ thuế để nuôi dưỡng bộ máy hành chính và bạo lực nói trên và chi dùng cho những công việc chung, lợi ích công cộng", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 106: Nhà nước là gì?",
        options: ["A. Tổ chức chính trị của giai cấp thống trị về kinh tế nhằm bảo vệ trật tự hiện hành và đàn áp sự phản kháng của các giai cấp khác", "B. Là sản phẩm của xã hội có giai cấp", "C. Là công cụ để tổ chức và quản lý xã hội", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    // Câu 107 bị thiếu trong nguồn
    {
        cau: "Câu 108: Nhà nước XHCN khác về bản chất so với các nhà nước trước đây trong lịch sử ở chỗ:",
        options: ["A. Có một hệ thống các cơ quan hành chính quản lý từ trung ương đến địa phương. Có hệ thống quân đội, cảnh sát chuyên dùng nhằm bảo vệ xã hội", "B. Có chức năng đối nội và đối ngoại", "C. Có một hệ thống luật pháp thể chế hóa lợi ích của giai cấp cầm quyền và quản lý dân cư trên một vùng lãnh thổ nhất định", "D. Nhà nước XHCN mang bản chất giai cấp công nhân, có tính nhân dân rộng rãi và tính dân tộc sâu sắc"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 109: Nhà nước là tổ chức ...... của giai cấp ...... về kinh tế nhằm ...... hiện hành và ...... sự phản kháng của các giai cấp khác.,",
        options: ["A. CHÍNH TRỊ; THỐNG TRỊ; BẢO VỆ TRẬT TỰ; ĐÀN ÁP", "B. KINH TẾ; THỐNG TRỊ; BẢO VỆ TRẬT TỰ; ĐÀN ÁP", "C. CHÍNH TRỊ; TIỂU TƯ SẢN; PHÁT TRIỂN; CẢI TẠO", "D. QUẢN LÝ; THỐNG TRỊ; BẢO VỆ TRẬT TỰ; ĐÀN ÁP"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 110: Dân chủ XHCN khác căn bản các nền dân chủ trước đây ở đặc điểm nào?",
        options: ["A. Là khát vọng của nhiều người", "B. Mang tính giai cấp", "C. Phi lịch sử", "D. Là nền dân chủ rộng rãi của giai cấp công nhân và nhân dân lao động"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 111: Hoàn thành câu dưới đây: Sự lãnh đạo của Đảng cộng sản đảm bảo giữ vững ...... và ...... của nhân dân.,",
        options: ["A. BẢN CHẤT GIAI CẤP CÔNG NHÂN CỦA NHÀ NƯỚC; LỢI ÍCH", "B. MỤC TIÊU; ĐỊNH HƯỚNG", "C. PHƯƠNG THỨC; QUYỀN LỰC", "D. BẢN CHẤT GIAI CẤP CÔNG NHÂN CỦA NHÀ NƯỚC; QUYỀN LỢI"],
        dap_an: "A",
        giai_thich: ""
    },
    // Câu 112 bị thiếu trong nguồn
    {
        cau: "Câu 113: Nguyên nhân sinh ra nhà nước là gì?",
        options: ["A. Do nhu cầu bảo vệ lợi ích giai cấp của giai cấp giữ địa vị thống trị về kinh tế", "B. Do nhu cầu phải tổ chức xã hội khi sản xuất và trao đổi sản phẩm phát triển", "C. Do nhu cầu của cuộc đấu tranh giai cấp trong xã hội có giai cấp", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 114: Chức năng của nhà nước là gì?",
        options: ["A. Tổ chức, quản lý xã hội và trấn áp bạo lực", "B. Giáo dục tư tưởng", "C. Trấn áp bạo lực", "D. Ban hành luật pháp"],
        dap_an: "A",
        giai_thich: ""
    },
    // Câu 115 bị thiếu trong nguồn
    {
        cau: "Câu 116: Bản chất chính trị của dân chủ XHCN thể hiện ở:",
        options: ["A. Mọi quyền lực thuộc về nhân dân - là nền dân chủ của đa số", "B. Dân chủ và chuyên chính là 2 mặt không tách rời của bản chất nhà nước XHCN", "C. Dưới sự lãnh đạo của Đảng cộng sản – dân chủ mang bản chất giai cấp công nhân, có tính nhân dân và dân tộc sâu sắc", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 117: Phạm trù dân chủ xuất hiện khi nào?",
        options: ["A. Từ khi có nhà nước trong lịch sử", "B. Từ khi có xã hội loài người", "C. Từ khi có Đảng cộng sản", "D. Từ khi có giai cấp công nhân"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 118: Dân chủ XHCN là gì?",
        options: ["A. Quyền làm chủ của nhân dân", "B. Là 1 chế độ xã hội trong đó mọi quyền lực thuộc về nhân dân", "C. Mục tiêu của sự phát triển xã hội", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 119: Dân chủ XHCN và Nhà nước XHCN có mối quan hệ ...... nhau trong sự phát triển của xã hội mới.",
        options: ["A. không tách rời", "B. độc lập", "C. ngang hàng", "D. song song"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 120: Hoàn thành câu dưới đây: Sự xuất hiện nền dân chủ XHCN là ...... , là ...... của quá trình phát triển lâu dài của các giá trị dân chủ qua các chế độ xã hội trong lịch sử.",
        options: ["A. BƯỚC PHÁT TRIỂN VỀ CHẤT; KẾT QUẢ", "B. NGUYÊN NHÂN; ĐỘNG LỰC", "C. CƠ SỞ; MỤC TIÊU", "D. PHƯƠNG TIỆN; MỤC ĐÍCH"],
        dap_an: "A",
        giai_thich: ""
    },
    // Câu 121 bị thiếu trong nguồn
    {
        cau: "Câu 122: Quan điểm “Con đường biện chứng của quá trình phát triển dân chủ là “Từ chuyên chế đến dân chủ tư sản; từ dân chủ tư sản đến dân chủ vô sản; từ dân chủ vô sản đến không còn dân chủ nữa” là của ai?",
        options: ["A. F.Engels", "B. Hồ Chí Minh", "C. Lenin", "D. K.Marx"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 123: Chọn phương án đúng để điền vào câu sau: “Cơ cấu xã hội là hệ thống tổ chức các yếu tố xã hội như giai cấp, nghề nghiệp, dân cư, lãnh thổ, tôn giáo v.v. trong đó  cơ cấu giai cấp  là nội dung chủ yếu tạo nên cơ cấu xã hội – giai cấp”.",
        options: ["A. cơ cấu giai cấp", "B. cơ cấu dân cư", "C. cơ cấu lãnh thổ", "D. cơ cấu tôn giáo"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 124: Sự biến đổi của cơ cấu XH – GC sẽ dẫn đến sự biến đổi:",
        options: ["A. Cơ cấu tôn giáo", "B. Cơ cấu nghề nghiệp", "C. Cơ cấu dân cư", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 125: Cơ cấu kinh tế bao gồm:",
        options: ["A. Cơ cấu ngành; cơ cấu lãnh thổ; cơ cấu giai cấp - xã hội", "B. Cơ cấu ngành; cơ cấu thành phần kinh tế; cơ cấu lãnh thổ", "C. Cơ cấu ngành; cơ cấu thành phần kinh tế; cơ cấu vùng", "D. Cơ cấu ngành; cơ cấu thành phần giai cấp - xã hội; cơ cấu lãnh thổ"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 126: Trong thời kỳ quá độ lên CNXH có sự xích lại gần nhau của các giai cấp, tầng lớp cơ bản trong xã hội là do:",
        options: ["A. Quan hệ sở hữu đối với TLSX thay đổi", "B. Do tính chất của lao động; do quan hệ phân phối", "C. Do sự tiến bộ trong đời sống văn hóa tinh thần", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 127: Mối quan hệ giữa các thành tố trong liên minh công - nông - trí thức biểu hiện như thế nào?",
        options: ["A. Giai cấp công nhân thông qua ĐCS để thực hiện lãnh đạo khối liên minh công - nông - trí thức", "B. Giai cấp nông dân cần được giác ngộ để thấy được Liên minh công - nông - trí thức sẽ đem lại lơi ích cho họ", "C. Tầng lớp trí thức phải thấm nhuần TGQ vô sản, tự nguyện phục vụ cho liên minh đem lại lợi ích cho phong trào vô sản", "D. ĐCS phải thấy được vai trò của trí thức đối với sự nghiệp CMXHCN trọng dụng và phát huy vai trò của trí thức", "E. Các phương án trên đều đúng"],
        dap_an: "E",
        giai_thich: ""
    },
    {
        cau: "Câu 128: Quan điểm “Liên minh công - nông là nguyên tắc cao nhất của chuyên chính vô sản” là của ai?",
        options: ["A. K.Marx", "B. F.Engels", "C. V.I.Lenin", "D. Hồ Chí Minh"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 129: Ngày nay giai cấp công nhân Việt Nam có nhũng biến đổi nhanh chóng đã khẳng định vai trò và vị trí trong Liên minh công - nông - trí thức, cụ thể là:",
        options: ["A. Đa dạng về cơ cấu", "B. Tăng nhanh về số lượng và chất lượng", "C. Về sự hiện diện trong tất cả các thành phần kinh tế", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 130: Ở Việt Nam niện nay, liên minh công - nông - trí thức đã có sự đa dạng hóa các hình thức liên minh thông qua hợp tác, liên kết giao lưu kinh tế:",
        options: ["A. Giữa giai cấp công nhân, nông dân, trí thức", "B. Giữa công nghiệp và nông nghiệp", "C. Giữa khoa học – công nghệ và các ngành dịch vụ khác/ giữa các vùng miền", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 131: Chọn phương án SAI:",
        options: ["A. “Chính trị đã chuyển trọng tâm sang chính trị trong lĩnh vực kinh tế” đảm bảo sự phát triển kinh tế xã hội bền vững", "B. Nội dung kinh tế của Liên minh công - nông - trí thức thể hiện trong hình thức mới của cuộc đấu tranh giai cấp nhằm thỏa mãn nhu cầu lợi ích kinh tế thiết thân của giai cấp công nhân, nông dân, trí thức và các tầng lớp lao động khác", "C. Nội dung kinh tế của Liên minh công - nông - trí thức thể hiện trên tất cả các lĩnh vực sản xuất xã hội", "D. Nội dung kinh tế của Liên minh công nông chỉ thuần túy trong lĩnh vực kinh tế"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 132: Hoàn thành câu dưới đây: Cơ cấu xã hội – giai cấp là ...... , các tầng lớp xã hội và mối quan hệ giữa chúng về ...... , về ...... , về ...... trên cơ sở một cơ cấu kinh tế nhất định.,",
        options: ["A. HỆ THỐNG CÁC GIAI CẤP; SỞ HỮU; QUẢN LÍ XÃ HỘI; ĐỊA VỊ CHÍNH TRỊ XÃ HỘI", "B. CƠ SỞ; KINH TẾ; CHÍNH TRỊ; VĂN HÓA", "C. HỆ THỐNG CÁC GIAI CẤP; ĐỊA VỊ; QUYỀN LỰC; UY TÍN", "D. NỀN TẢNG; SẢN XUẤT; PHÂN PHỐI; TIÊU DÙNG"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 133: Tìm phương án sai: “Cấu trúc xã hội ở nước ta hiện nay là …”",
        options: ["A. cấu trúc thuần nhất", "B. một cấu trúc đan xen vừa là “cấu trúc ngang”, vừa là “cấu trúc dọc”.", "C. cấu trúc “tầng bậc” cao thấp khác nhau trong xã hội, được xem xét ở ba dấu hiệu cơ bản khác nhau: địa vị kinh tế (tài sản, thu nhập), địa vị chính trị (quyền lực), địa vị xã hội (uy tín) – Cấu trúc dọc", "D. một tập hợp các giai cấp, tầng lớp, nghề nghiệp, tổ chức, đoàn thể trong xã hội. Trong đó gồm các giai cấp công nhân, nông dân, tiểu thương, doanh nhân, trí thức... – Cấu trúc ngang"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 134: Mối quan hệ giữa các thành tố trong liên minh công - nông - trí thức biểu hiện như thế nào?",
        options: ["A. Giai cấp công nhân thông qua ĐCS để thực hiện lãnh đạo khối liên minh công - nông - trí thức", "B. Giai cấp nông dân cần được giác ngộ để thấy được Liên minh công - nông - trí thức sẽ đem lại lơi ích cho họ", "C. Tầng lớp trí thức phải thấm nhuần TGQ vô sản, tự nguyện phục vụ cho liên minh đem lại lợi ích cho phong trào vô sản. ĐCS phải thấy được vai trò của trí thức đối với sự nghiệp CMXHCN trọng dụng và phát huy vai trò của trí thức.", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 135: Nguyên tắc nào quyết định sự vững chắc của khối liên minh công nông và các tầng lớp lao động khác?",
        options: ["A. Đảm bảo quyền lãnh đạo của giai cấp công nhân", "B. Đảm bảo nguyên tắc tự nguyện", "C. Kết hợp đúng đắn các lợi ích", "D. Tất cả các phương án trên"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 136: Quan điểm “Liên minh công - nông là nguyên tắc cao nhất của chuyên chính vô sản” là của ai?",
        options: ["A. V.I.Lenin", "B. F.Engels", "C. K.Marx", "D. Hồ Chí Minh"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 137: Ngày nay giai cấp công nhân Việt Nam có nhũng biến dổi nhanh chóng đã khẳng định vai trò và vị trí trong Liên minh công - nông - trí thức, cụ thể là:",
        options: ["A. Đa dạng về cơ cấu", "B. Tăng nhanh về số lượng và chất lượng", "C. Về sự hiện diện trong tất cả các thành phần kinh tế", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 138: Nội dung liên minh giữa giai cấp công nhân với nông dân và các tầng lớp lao động khác bao gồm:",
        options: ["A. Liên minh về chính trị", "B. Liên minh về kinh tế", "C. Liên minh trong lĩnh vực văn hóa tư tưởng", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 139: Sự biến đổi của cơ cấu XH – GC sẽ dẫn đến sự biến đổi:",
        options: ["A. Cơ cấu tôn giáo", "B. Cơ cấu nghề nghiệp", "C. Cơ cấu dân cư", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 140: Lý luận của Chủ nghĩa Marx - Lenin về tính tất yếu của giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức gồm những nội dung nào?",
        options: ["A. “Ở các nước mà nông dân chiếm đại đa số dân cư, giai cấp công nhân chỉ có thể tiến hành cách mạng xã hội thắng lợi bằng cách liên minh với giai cấp nông dân.” (K.Marx)", "B. Trong quá trình đấu tranh cách mạng, giai cấp vô sản dần dần thể hiện được vai trò lịch sử của mình là người đại biểu cho tất cả các giai cấp, các tầng lớp lao động khác trong xã hội do đó có khả năng tập hợp đội ngũ cách mạng trong đó có cả trí thức.", "C. Trong cuộc cách mạng XHCN, giai cấp công nhân cần đến trí thức là những người “khai sáng của giai cấp mình về lý luận của cách mạng XHCN – Tư tưởng tiến bộ của đội ngũ trí thức đóng vai trò là vũ khí lý luận cho phong trào công nhân.", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 141: Ở Việt Nam niện nay, liên minh công - nông - trí thức đã có sự đa dạng hóa các hình thức liên minh thông qua hợp tác, liên kết giao lưu kinh tế:",
        options: ["A. Giữa giai cấp công nhân, nông dân, trí thức", "B. Giữa công nghiệp và nông nghiệp", "C. Giữa khoa học – công nghệ và các ngành dịch vụ khác/ giữa các vùng miền…", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 142: Tại sao cơ cấu xã hội – giai cấp có vị trí quan trọng nhất trong toàn bộ cơ cấu xã hội?",
        options: ["A. Vì cơ cấu XH - GC liên quan đến quyền sở hữu TLSX, liên quan đến tổ chức quản lý sx và phân phối. Do đó liên quan đến đảng phái chính trị, nhà nước", "B. Vì sự biến đổi của cơ cấu XH – GC sẽ dẫn đến sự biến đổi các cơ cấu xã hội khác", "C. Vì cơ cấu XH – GC là cơ sở xây dựng chính sách phát triển kinh tế xã hội trong những giai đoạn nhất định", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 143: Cơ sở khách quan của việc xây dựng khối liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác trong cách mạng XHCN là:",
        options: ["A. Vì họ đều là người lao động, đều bị áp bức bóc lột", "B. Do có sự gắn bó tự nhiên giữa nông nghiệp với công nghiệp và các ngành dịch vụ cho sản xuất", "C. Họ đều có nhu cầu giải phóng mình và giải phóng xã hội khỏi áp bức bóc lột", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 144: Để giành thắng lợi trong cách mạng XHCN, giai cấp công nhân phải liên minh chặt chẽ với giai cấp nông dân và các tầng lớp lao động khác vì:",
        options: ["A. Đó là 1 tất yếu khách quan, nhằm tạo ra lực lượng cách mạng", "B. Là liên minh giai cấp để tiến tới xóa bỏ giai cấp", "C. Đó là liên minh lâu dài trong suốt quá trình cách mạng", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 145: Cơ cấu xã hội - giai cấp ở Việt Nam trong thời kỳ quá độ lên CNXH có:",
        options: ["A. Sự biến đổi vừa mang tính quy luật phổ biến, vừa mang tính đặc thù", "B. Sự biến đổi cơ cấu xã hội - giai cấp bị chi phối bởi sự biến đổi cơ cấu kinh tế. Từ 1986 đến nay sự chuyển mạnh sang kinh tế thị trường với nhiều hình thức sở hữu đã hình thành cơ cấu giai cấp đa dạng, phức tạp – Tính quy luật", "C. Sự biến đổi diễn ra trong nội bộ từng giai cấp, tầng lớp. Bản thân các giai cấp, tầng lớp thay đổi nhanh chóng và thúc đấy nền kinh tế đất nước phát triển nhanh chóng – Tính đặc thù", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 146: Đặc trưng của dân tộc là:",
        options: ["A. Cộng đồng về lãnh thổ/ Cộng đồng về ngôn ngữ", "B. Cộng đồng về kinh tế/ Cộng đồng về văn hóa, tín nguõng", "C. Có nhà nước và pháp luật thống nhất", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 147: Trong mối quan hệ giữa dân tộc - giai cấp - nhân loại thì vấn đề chung nhất là gì?",
        options: ["A. Giai cấp", "B. Dân tộc", "C. Nhân loại", "D. Các phương án trên đều đú"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 148: Hai xu hướng của vấn đề dân tộc là:",
        options: ["A. Xu hướng các dân tộc tách ra thành các quốc gia dân tộc độc lập", "B. Xu hướng các dân tộc liên kết với nhau trên cơ sở lợi ích của dân tộc mình", "C. Xu hướng mở rộng quan hệ kinh tế giữa các dân tộc, hình thành thị trường thế giới", "D. Phương án A và B"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 149: Nội dung cương lĩnh dân tộc của Chủ nghĩa Marx - Lenin bao gồm:",
        options: ["A. Các dân tộc hoàn toàn bình đẳng", "B. Các dân tộc được quyền tự quyết", "C. Liên hiệp công nhân tất cả các dân tộc", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 150: Chọn phương án đúng nhất:",
        options: ["A. Việt Nam là một dân tộc gồm 54 dân tộc anh em", "B. Việt Nam là một quốc gia gồm 54 dân tộc anh em", "C. Việt Nam là một quốc gia dân tộc gồm 54 dân tộc anh em", "D. Việt Nam là một đất nước gồm 54 dân tộc anh em"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 151: Đặc điểm cư trú của dân tộc Việt Nam là:",
        options: ["A. Các dân tộc sống xen kẽ trên khắp dải đất VN từ lâu đời", "B. Đồng bào các dân tộc ít người chủ yếu sống ở vùng biên cương, hải đảo có vị trí chiến lược quan trọng về kinh tế, an ninh quốc phòng", "C. Không có tỉnh thành nào chỉ thuần túy có 1 dân tộc", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 152: Trong mối quan hệ giữa Dân tộc và Giai cấp thì:",
        options: ["A. Giai cấp quyết định dân tộc", "B. Vấn đề dân tộc ảnh huỏng đến vấn đề giai cấp", "C. Đấu tranh giải phóng dân tộc là tiền đề, là điều kiện để giải phóng giai cấp", "D. Các phương án đều đúng"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 153: Nội dung cương lĩnh dân tộc của Chủ nghĩa Marx - Lenin bao gồm:",
        options: ["A. Các dân tộc hoàn toàn bình đẳng", "B. Các dân tộc được quyền tự quyết", "C. Liên hiệp công nhân tất cả các dân tộc", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 154: Các hình thức cộng đồng người trong lịch sử bao gồm:",
        options: ["A. Thị tộc, Bộ lạc", "B. Thị tộc, Bộ lạc, Bộ tộc", "C. Thị tộc, Bộ tộc", "D. Thị tộc, Bộ lạc, Bộ tộc, Dân tộc"],
        dap_an: "D",
        gai_thich: ""
    },
    {
        cau: "Câu 155: Truyền thuyết, truyện lịch sử nào thừa nhận 54 dân tộc anh em ở Việt Nam có chung cội nguồn?",
        options: ["A. Sơn tinh, Thủy tinh", "B. Lạc Long Quân và Âu Cơ", "C. Hai Bà Trưng", "D. Thánh Gióng Đáp án"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 156: Quá trình cách mạng Việt Nam đã thể hiện hai xu hướng của vấn đề dân tộc như thế nào?",
        options: ["A. Cách mạng tháng 8/1945 thành công", "B. Tham gia tích cực vào ASEAN, APEC, WTO.. .", "C. Kháng chiến chống Mĩ thắng lợi – Chiến dịch Hồ Chí Minh toàn thắng 30/4/1975", "D. Tất cả các phương án trên"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 157: Đặc trưng của dân tộc là:",
        options: ["A. Cộng đồng về lãnh thổ/ Cộng đồng về ngôn ngữ", "B. Cộng đồng về kinh tế/ Cộng đồng về văn hóa, tín nguõng", "C. Có nhà nước và pháp luật thống nhất", "D. Các phương án đều đúng"],
        dap_an: "D",
        gai_thich: ""
    },
    {
        cau: "Câu 158: Hai xu hướng của vấn đề dân tộc là:",
        options: ["A. Xu hướng các dân tộc tách ra thành các quốc gia dân tộc độc lập", "B. Xu hướng các dân tộc liên kết với nhau trên cơ sở lợi ích của dân tộc mình", "C. Xu hướng mở rộng quan hệ kinh tế giữa các dân tộc, hình thành thị trường thế giới", "D. Phương án A và B"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 159: Điền vào chỗ trống: “..... là hình thức cộng đồng người được hình thành lâu dài trong lịch sử trên cơ sở cộng đồng về lãnh thổ, về ngôn ngữ, về kinh tế, về văn hóa tín ngưỡng”",
        options: ["A. Bộ lạc", "B. Dân tộc", "C. Thị tộc", "D. Bộ tộc"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 160: Điền và chố trống: “Quan điểm của Lenin về ... xu hướng khách quan của sự phát triển quan hệ dân tộc”",
        options: ["A. các", "B. hai", "C. một", "D. ba"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 161: Điền vào chỗ trống trong câu sau: Quan điểm của Đảng cộng sản Việt Nam về vấn đề dân tộc là “Tăng cường các mối quan hệ dân tộc tốt đẹp, củng cố khối đại đoàn kết toàn dân tộc là , lâu dài và cấp bách của cách mạng VN”.",
        options: ["A. nhiệm vụ cơ bản", "B. chủ trương", "C. vấn đề chiến lược cơ bản", "D. phương pháp chủ yếu"],
        dap_an: "C",
        giai_thich: ""
    },
    {
        cau: "Câu 162: Bản chất tôn giáo là:",
        options: ["A. Sự bất lực của con người về nhận thức", "B. Sự phản ánh hư ảo hiện thực", "C. Sự phản kháng mơ hồ", "D. Tín ngưỡng mù quáng"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 163: Tôn giáo có những chức năng nào?",
        options: ["A. Chức năng đền bù hư ảo và chức năng thế giới quan", "B. Chức năng điều chỉnh hành vi và chức năng giao tiếp", "C. Chức năng liên kết cộng đồng", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 164: Việc xem xét và giải quyết vấn đề tôn giáo phải phân biệt hai mặt chính trị và tư tưởng của tôn giáo vì",
        options: ["A. Mặt chính trị của tôn giáo thường dễ bị các thế lực thù địch lợi dụng để chống phá sự nghiệp xây dựng CNXH – cần nhận dạng đúng bản chất", "B. Mặt tư tưởng là biểu hiện nhu cầu tín ngưỡng của nhân dân – cần được tôn trọng", "C. Xử lí các vấn đề tôn giáo phải trên cơ sở pháp luật", "D. Tất cả các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 165: Quá trình giải quyết vấn đề tôn giáo cần thận trọng tỷ mỉ nhằm đạt được nhũng yêu cầu sau:",
        options: ["A. Đoàn kết rộng rãi đồng bào có đạo và không có đạo vì mục tiêu dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh. Động viên đồng bào có đạo góp sức mình cho sự nghiệp phát triển đất nước", "B. Phát huy tinh thần yêu nước, chấp hành nghiêm pháp luật của nhà nước", "C. Kiên quyết trừng trị kẻ lợi dụng tôn giáo, tín ngưỡng phá hoại sự nghiệp xây dựng CNXH", "D. Các phương án đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 166: Chính sách của Đảng và Nhà nước Việt Nam đối với tôn giáo hiện nay là gì?",
        options: ["A. Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng", "B. Vận động quần chúng có đạo sống tốt đời đẹp đạo góp phần xây dựng và bảo vệ tổ quốc XHCN", "C. Làm tốt công tác tôn giáo là nhiệm vụ của toàn bộ hệ thống chính trị do Đảng lãnh đạo", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    },
    {
        cau: "Câu 167: Tính đến năm 2019, tôn giáo nào ở Việt Nam có số lượng tín đồ nhiều nhất?",
        options: ["A. Phật giáo", "B. Hồi giáo", "C. Công giáo", "D. Cao đài"],
        dap_an: "A",
        gai_thich: ""
    },
    {
        cau: "Câu 168: Quan điểm “Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư ảo - vào trong đầu óc con người – của những lực lượng ở bên ngoài chi phối cuộc sống hàng ngày của họ; chỉ là sự phản ánh trong đó những lực lượng ở trần thế đã mang hình thức những lực lượng siêu trần thế” là của ai?",
        options: ["A. V.I.Lenin", "B. F.Engels", "C. K.Marx", "D. Hồ Chí Minh"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 169: Nguồn gốc tôn giáo bao gồm:",
        options: ["A. Nguồn gốc nhận thức/ Nguồn gốc kinh tế - xã hội/ Nguồn gốc tâm lý", "B. Nguồn gốc nhận thức/ Nguồn gốc tâm lý", "C. Nguồn gốc nhận thức/ Nguồn gốc kinh tế - xã hội", "D. Nguồn gốc kinh tế - xã hội/ Nguồn gốc tâm lý/ Nguồn gốc giai cấp"],
        dap_an: "A",
        giai_thich: ""
    },
    {
        cau: "Câu 170: Quan điểm của Chủ nghĩa Marx - Lenin cho rằng:",
        options: ["A. Tôn giáo sẽ mất đi khi giai cấp công nhân có chính quyền trong tay", "B. Tôn giáo còn tồn tại lâu dài và trong lịch sử, bản thân tôn giáo cũng có những thay đổi. Do đó phải thực hiện đoàn kết tôn giáo, tôn trọng tự do tín ngưỡng của nhân dân để tiến hành xây dựng XHCN", "C. Tôn giáo đối lập với CNXH", "D. Tôn giáo chỉ có tính tiêu cực mà thôi"],
        dap_an: "B",
        giai_thich: ""
    },
    {
        cau: "Câu 171: Tôn giáo là gì?",
        options: ["A. Tôn giáo là một hiện tượng lịch sử - xã hội thích ứng với tín ngưỡng về lực lượng siêu nhiên", "B. Tôn giáo là một hình thái ý thức xã hội phản ánh hư ảo hiện thực, thông qua đó thì các hiện tượng tự nhiên trở thành siêu nhiên thần bí", "C. Tôn giáo là một thực thể xã hội với các tôn giáo cụ thể như đạo Phật, đạo Công giáo, đạo tin lành… với hàng triệu tín đồ cùng các hoạt động tạo nên biểu hiện bên ngoài của nó.", "D. Các phương án trên đều đúng"],
        dap_an: "D",
        giai_thich: ""
    }
];
// --- DỮ LIỆU ĐỀ SỐ 4 ---
const de4 = [
    {
        cau: "Câu 1: Tư tưởng xã hội chủ nghĩa là gì?",
        options: [
            "A. Là một hệ thống những quan niệm phản ánh những nhu cầu, những ước mơ, nguyện vọng của các giai cấp lao động về một xã hội không có áp bức và bóc lột, mọi người đều bình đẳng và có cuộc sống ấm no, hạnh phúc.",
            "B. Là những thành tựu của con người đạt được trong quá trình đấu tranh giải phóng giai cấp.",
            "C. Là chế độ xã hội không có áp bức bóc lột, mọi người đều bình đẳng tự do.",
            "D. Cả A, B, C"
        ],
        dap_an: "D",
        giai_thich: "Tư tưởng XHCN là hệ thống quan niệm phản ánh nguyện vọng của giai cấp lao động về xã hội không có áp bức, bóc lột, mọi người bình đẳng, ấm no."
    },
    // Câu 2 và 3 bị thiếu dữ liệu, bỏ qua
    {
        cau: "Câu 4: Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là gì?",
        options: [
            "A. Là những quy luật và tính quy luật chính trị – xã hội của quá trình phát sinh, hình thành và phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa.",
            "B. Là những quy luật hình thành, phát triển và hoàn thiện của các hình thái kinh tế - xã hội.",
            "C. Là những quy luật và tính quy luật chính trị – xã hội của quá trình phát sinh, hình thành và phát triển hình thái kinh tế - xã hội chủ nghĩa xã hội.",
            "D. Cả A, B và C"
        ],
        dap_an: "A",
        giai_thich: "Đối tượng nghiên cứu là những quy luật và tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành, phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa."
    },
    {
        cau: "Câu 5: Chức năng và nhiệm vụ của chủ nghĩa xã hội khoa học là gì?",
        options: [
            "A. Là trang bị những tri thức khoa học của chủ nghĩa Mác - Lênin đã phát hiện ra và luận giải về quá trình tất yếu lịch sử...",
            "B. Là giáo dục, trang bị lập trường tư tưởng chính trị của giai cấp công nhân...",
            "C. Là định hướng về chính trị – xã hội cho mọi hoạt động của giai cấp công nhân...",
            "D. Cả A, B và C đều đúng."
        ],
        dap_an: "D",
        giai_thich: "CNXHKH có chức năng lý luận, giáo dục lập trường tư tưởng chính trị và định hướng chính trị – xã hội."
    },
    {
        cau: "Câu 6: Ai đã đưa ra quan niệm \"CNXH là sự phản kháng và đấu tranh chống sự bóc lột người lao động, một cuộc đấu tranh nhằm hoàn toàn xoá bỏ sự bóc lột\"",
        options: ["A. S.Phuriê", "B. C.Mác", "C. Ph.Ănghen", "D. V.I.Lênin"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Quan niệm này là của Ph.Ăngghen."
    },
    {
        cau: "Câu 7: Ai được coi là người mở đầu các trào lưu xã hội chủ nghĩa và cộng sản chủ nghĩa thời cận đại.",
        options: ["A. Tômađô Campanenla", "B. Tômát Morơ", "C. Arítxtốt", "D. Platôn"],
        dap_an: "B", // Suy luận từ Đề 1
        giai_thich: "Tômát Morơ (với tác phẩm Utopia) được coi là người mở đầu."
    },
    {
        cau: "Câu 8: Ai là người viết tác phẩm \"Không tưởng\" (Utôpi)",
        options: ["A. Xanh Xi Mông", "B. Campanenla", "C. Tômát Morơ", "D. Uynxtenli"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Tác phẩm \"Không tưởng\" là của Tômát Morơ."
    },
    {
        cau: "Câu 9: Ai là người đã đưa ra chủ trương thiết lập nền \"Chuyên chính cách mạng của những người lao động\".",
        options: ["A. Tômát Morơ", "B. Xanh Ximông", "C. Grắccơ Babớp", "D. Morenly"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Grắccơ Babớp đã đưa ra chủ trương này."
    },
    {
        cau: "Câu 10: Tư tưởng về \"Giang sơn ngàn năm của Chúa\" xuất hiện ở thời đại nào.",
        options: ["A. Cộng sản nguyên thuỷ", "B. Thời cổ đại", "C. Thời cận đại", "D. Thời phục hưng"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Tư tưởng này xuất hiện ở thời cận đại."
    },
    {
        cau: "Câu 11: Tác phẩm \"Thành phố mặt trời\" là của tác giả nào?",
        options: ["A. Giêrắcdơ Uyxntenli", "B. Tômađô Campanenla", "C. Giăng Mêliê", "D. Sáclơ Phuriê"],
        dap_an: "B", // Suy luận từ Đề 1
        giai_thich: "Tác phẩm \"Thành phố mặt trời\" là của Tômađô Campanenla."
    },
    {
        cau: "Câu 12: Ai đã viết tác phẩm \"Những di chúc của tôi\"",
        options: ["A. Tômát Morơ", "B. Giăng Mêliê", "C. Grắccơ Babớp", "D. Morenly"],
        dap_an: "B", // Suy luận từ Đề 1
        giai_thich: "Giăng Mêliê là tác giả của \"Những di chúc của tôi\"."
    },
    {
        cau: "Câu 13: Ai là người đã nêu ra \"Tuyên ngôn của những người bình dân\"?",
        options: ["A. Tômát Morơ", "B. Xanh Ximông", "C. Grắccơ Babớp", "D. Morenly"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Grắccơ Babớp là tác giả của \"Tuyên ngôn của những người bình dân\"."
    },
    {
        cau: "Câu 14: Ai là người đặt vấn đề đấu tranh cho chủ nghĩa xã hội với tính cách là một phong trào thực tiễn (Phong trào hiện thực)",
        options: ["A. Tômát Morơ", "B. Xanh Ximông", "C. Grắccơ Babớp", "D. Morenly"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Grắccơ Babớp đã đặt vấn đề này."
    },
    {
        cau: "Câu 15: Những nhà tư tưởng tiêu biểu của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX?",
        options: [
            "A. Grắccơ Babớp, Xanh Ximông, Sáclơ Phuriê",
            "B. Xanh Ximông, Sáclơ Phuriê, G. Mably",
            "C. Xanh Ximông, Sáclơ Phuriê, Rôbớt Ôoen",
            "D. Xanh Ximông, Giăng Mêliê, Rôbớt Ôoen"
        ],
        dap_an: "C",
        giai_thich: "Các đại biểu tiêu biểu là Xanh Ximông, Sáclơ Phuriê và Rôbớt Ôoen."
    },
    {
        cau: "Câu 16: Nhà tư tưởng xã hội chủ nghĩa không tưởng nào đã nói đến vấn đề giai cấp và xung đột giai cấp.",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Rôbớt Ôoen", "D. Grắccơ Babớp"],
        dap_an: "A", // Suy luận từ Đề 1
        giai_thich: "Xanh Ximông là người đã nói đến vấn đề giai cấp và xung đột giai cấp."
    },
    {
        cau: "Câu 17: Nhà tư tưởng xã hội chủ nghĩa nào đã tố cáo quá trình tích luỹ tư bản chủ nghĩa bằng hình ảnh \"cừu ăn thịt người “",
        options: ["A. Tômát Morơ", "B. Sáclơ Phuriê", "C. Rôbớt Ôoen", "D. Grắccơ Babớp"],
        dap_an: "A", // Suy luận từ Đề 1
        giai_thich: "Tômát Morơ đã sử dụng hình ảnh này."
    },
    {
        cau: "Câu 18: Ai là người nêu ra luận điểm: Trong nền kinh tế tư bản chủ nghĩa, \"sự nghèo khổ được sinh ra từ chính sự thừa thãi\".",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Rôbớt Ôoen", "D. Tômát Morơ"],
        dap_an: "B", // Suy luận từ Đề 1
        giai_thich: "Luận điểm này là của Sáclơ Phuriê."
    },
    {
        cau: "Câu 19: Nhà tư tưởng xã hội chủ nghĩa nào đã chia lịch sử phát triển của nhân loại thành các giai đoạn: mông muội, dã man, gia trưởng và văn minh.",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Grắccơ Babớp", "D. Tômát Morơ"],
        dap_an: "A", // Suy luận từ Đề 1
        giai_thich: "Xanh Ximông đã chia lịch sử nhân loại theo các giai đoạn này."
    },
    {
        cau: "Câu 20: Ai đã nêu ra tư tưởng: trình độ giải phóng xã hội được đo bằng trình độ giải phóng phụ nữ?",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Grắccơ Babớp", "D. Rôbớt Ôoen"],
        dap_an: "B", // Suy luận từ Đề 1
        giai_thich: "Tư tưởng này là của Sáclơ Phuriê."
    },
    {
        cau: "Câu 21: Người mơ ước xây dựng thành phố mặt trời, mà trong đó không có nạn thất nghiệp, không có kẻ lười biếng, ai cũng lao động. Ông là ai?",
        options: ["A. Giê-rắc Uynxteli", "B. Grắc Babơp", "C. Tômađô Cămpanela", "D. Tô mát Mo rơ"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Tômađô Campanenla là tác giả của \"Thành phố Mặt Trời\"."
    },
    {
        cau: "Câu 22: Nhà tư tưởng xã hội chủ nghĩa nào đã tiến hành thực nghiệm xã hội cộng sản trong lòng xã hội tư bản?",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Grắccơ Babớp", "D. Rôbớt Ôoen"],
        dap_an: "D", // Suy luận từ Đề 1
        giai_thich: "Rôbớt Ôoen đã tiến hành thực nghiệm xã hội cộng sản."
    },
    {
        cau: "Câu 23: Nhà tư tưởng xã hội chủ nghĩa nào đã bị phá sản trong khi thực nghiệm tư tưởng cộng sản chủ nghĩa của mình?",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Rôbớt Ôoen", "D. Tômát Morơ"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Rôbớt Ôoen đã bị phá sản khi thực hiện mô hình New Harmony."
    },
    {
        cau: "Câu 24: Những đại biểu tiêu biểu cho chủ nghĩa xã hội không tưởng phê phán thế kỷ XIX ở Pháp và Anh?",
        options: ["A. Xanh xi mông", "B. Phuriê", "C. Rô Bớc Ô Oen", "D. Cả A, B, C."],
        dap_an: "D",
        giai_thich: "Các đại biểu tiêu biểu là Xanh Ximông, Phuriê (Pháp) và Rôbớt Ôoen (Anh)."
    },
    {
        cau: "Câu 25: Chọn những tác giả nào đúng với tác phẩm của họ?",
        options: ["A. To mát Morơ: Tác phẩm Thành phố mặt trời", "B. Tômađô Campanenla: Tác phẩm Không tưởng (Utopie)", "C. Giắccơ Babớp: Tuyên ngôn của những người bình dân", "D. Cả ba đều sai."],
        dap_an: "D", // Suy luận từ Đề 1
        giai_thich: "Tômát Morơ viết Không tưởng; Campanenla viết Thành phố Mặt trời. Do đó, cả A và B đều sai, D đúng."
    },
    {
        cau: "Câu 26: Những hạn chế cơ bản của các nhà tư tưởng xã hội chủ nghĩa trước Mác là gì?",
        options: [
            "A. Chưa thấy được bản chất bóc lột và quá trình phát sinh phát triển và diệt vong tất yếu của chủ nghĩa tư bản.",
            "B. Không dùng bạo lực cách mạng để xoá bỏ chế độ tư bản chủ nghĩa.",
            "C. Không phát hiện được lực lượng xã hội tiên phong có thể thực hiện cuộc chuyển biến cách mạng...",
            "D. Cả A, B và C"
        ],
        dap_an: "D",
        giai_thich: "Các hạn chế cơ bản là: Không thấy được quy luật vận động, không tìm được lực lượng tiên phong, và không dùng bạo lực cách mạng."
    },
    {
        cau: "Câu 27: Nguyên nhân chủ yếu của những hạn chế của chủ nghĩa xã hội không tưởng là?",
        options: ["A. Do trình độ nhận thức của những nhà tư tưởng.", "B. Do khoa học chưa phát triển.", "C. Do những điều kiện lịch sử khách quan quy định.", "D. Cả A, B, C."],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Hạn chế là do điều kiện lịch sử khách quan quy định."
    },
    {
        cau: "Câu 28: C. Mác sinh ngày tháng năm nào?",
        options: ["A. 14.3.1918", "B. 5.5.1820", "C. 5.5.1818", "D. 22.4.1818"],
        dap_an: "C",
        giai_thich: "C. Mác sinh ngày 5.5.1818."
    },
    {
        cau: "Câu 29: C. Mác mất ngày tháng năm nào?",
        options: ["A. 14.3.1883", "B. 14.3.1881", "C. 5.8.1883", "D. 21.1.1883"],
        dap_an: "A",
        giai_thich: "C. Mác mất ngày 14.3.1883."
    },
    {
        cau: "Câu 30: Ph. Ăngghen sinh ngày tháng năm nào?",
        options: ["A. 25.11.1818", "B. 28.11.1820", "C. 5.5.1820", "D. 22.4.1820"],
        dap_an: "B",
        giai_thich: "Ph. Ăngghen sinh ngày 28.11.1820."
    },
    {
        cau: "Câu 31: Ph. Ăngghen mất ngày tháng năm nào?",
        options: ["A. 14.3.1888", "B. 5.8.1895", "C. 28.11.1895", "D. 21.1.1895"],
        dap_an: "B",
        giai_thich: "Ph. Ăngghen mất ngày 5.8.1895."
    },
    {
        cau: "Câu 32: Ai là người được Ph.Ăngghen nhận xét là \"có tầm mắt rộng thiên tài\"?",
        options: ["A. Phurie", "B. Ôoen", "C. G. Ba lớp", "D. Xanh Ximông"],
        dap_an: "D", // Suy luận từ Đề 1
        giai_thich: "Ph.Ăngghen nhận xét Xanh Ximông là người có tầm mắt rộng thiên tài."
    },
    {
        cau: "Câu 33: Ai là người được Ph.Ăngghen đánh giá là \"nắm phép biện chứng một cách cũng tài tình như Hêghen là người đương thời với ông\"?",
        options: ["A. Mê li ê", "B. Xanh Ximông", "C. Phurie", "D. Ôoen"],
        dap_an: "B", // Suy luận từ Đề 1
        giai_thich: "Xanh Ximông được Ph.Ăngghen đánh giá cao về phép biện chứng."
    },
    {
        cau: "Câu 34: Ai là người được Ph.Ăngghen nhận xét \"Mọi phong trào xã hội, mọi thành tựu thực sự đã diễn ra ở Anh vì lợi ích của công nhân đều gắn với tên tuổi của ông\" ông là ai?",
        options: ["A. G. Uyn xtlenli", "B. Xanh Ximông", "C. Các Mác", "D. Ôoen"],
        dap_an: "D", // Suy luận từ Đề 1
        giai_thich: "Người đó là Rôbớt Ôoen."
    },
    {
        cau: "Câu 35: Ai là người nêu ra quan điểm: \"Dân vi quý, xã tắc thứ chi, quân vi khinh\" (Dân là trọng hơn cả, xã tắc đứng đằng sau, vua còn nhẹ hơn\"?",
        options: ["A. Khổng Tử", "B. Mạnh Tử", "C. Hàn Phi Tử", "D. Tuân tử"],
        dap_an: "B", // Suy luận từ Đề 1
        giai_thich: "Quan điểm này là của Mạnh Tử."
    },
    {
        cau: "Câu 36: Ai trong số những người sau đây được Các Mác coi là nhà tư tưởng vĩ đại nhất thời cổ đại?",
        options: ["A. Đêmôcrit", "B. Êpiquyarơ", "C. Aristôt", "D. Platôn"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Các Mác coi Aristôt là nhà tư tưởng vĩ đại nhất thời cổ đại."
    },
    {
        cau: "Câu 37: Nội dung cơ bản nhất mà nhờ đó chủ nghĩa xã hội từ không tưởng trở thành khoa học?",
        options: [
            "A. Lên án mạnh mẽ chủ nghĩa tư bản.",
            "B. Phản ánh đúng khát vọng của nhân dân lao động bị áp bức.",
            "C. Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu CNTB, xây dựng CNXH.",
            "D. Chỉ ra sự cần thiết phải thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội."
        ],
        dap_an: "C",
        giai_thich: "Phát hiện ra sứ mệnh lịch sử của giai cấp công nhân là nội dung cơ bản nhất."
    },
    {
        cau: "Câu 38: Những điều kiện và tiền đề khách quan nào dẫn đến sự ra đời của chủ nghĩa xã hội khoa học:",
        options: [
            "A. Sự ra đời và phát triển của nền đại công nghiệp tư bản chủ nghĩa",
            "B. Sự trưởng thành của giai cấp công nhân công nghiệp",
            "C. Những thành tựu khoa học tự nhiên và tư tưởng lí luận đầu thế kỉ 19",
            "D. Cả A, B và C"
        ],
        dap_an: "D",
        giai_thich: "Các tiền đề khách quan là: Điều kiện kinh tế-xã hội (A, B) và Tiền đề khoa học và tư tưởng lý luận (C)."
    },
    {
        cau: "Câu 39: Tiền đề nào là nguồn gốc lý luận trực tiếp của chủ nghĩa xã hội khoa học.",
        options: ["A. Triết học cổ điển Đức", "B. Kinh tế chính trị học cổ điển Anh", "C. Chủ nghĩa xã hội không tưởng – phê phán", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Cả ba (Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, Chủ nghĩa xã hội không tưởng phê phán) đều là nguồn gốc lý luận trực tiếp."
    },
    {
        cau: "Câu 40: Ph. Ăngghen đã đánh giá: \"Hai phát hiện vĩ đại này đã đưa chủ nghĩa xã hội trở thành một khoa học\". Hai phát kiến đó là gì?",
        options: [
            "A. Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử",
            "B. Sứ mệnh lịch sử của giai cấp công nhân – Học thuyết giá trị thặng dư",
            "C. Học thuyết giá trị thặng dư – Chủ nghĩa duy vật lịch sử",
            "D. Sứ mệnh lịch sử của giai cấp công nhân – Chủ nghĩa duy vật lịch sử"
        ],
        dap_an: "C",
        giai_thich: "Hai phát kiến vĩ đại là Học thuyết giá trị thặng dư và Chủ nghĩa duy vật lịch sử."
    },
    {
        cau: "Câu 41: Vì sao chủ nghĩa xã hội khoa học theo nghĩa rộng là chủ nghĩa Mác - Lênin?",
        options: [
            "A. Vì chủ nghĩa xã hội khoa học đã phác thảo ra mô hình chủ nghĩa xã hội và chủ nghĩa cộng sản.",
            "B. Vì chủ nghĩa xã hội khoa học đã luận chứng về sứ mệnh lịch sử của giai cấp công nhân hiện đại.",
            "C. Vì chủ nghĩa xã hội khoa học dựa vào triết học, kinh tế chính trị để lý giải tính tất yếu lịch sử...",
            "D. Cả A, B và C."
        ],
        dap_an: "D", // Đáp án D trong đề 1, A trong đề 4. Chọn D theo logic tổng hợp.
        giai_thich: "CNXHKH theo nghĩa rộng là chủ nghĩa Mác - Lênin vì nó là sự tổng hợp và luận chứng toàn diện (A, B, C)."
    },
    {
        cau: "Câu 42: Tác phẩm “Phê phán cương lĩnh Gôta” là của ai?",
        options: ["A. C.Mác", "B. Ph.Ănghen", "C. C.Mác và Ph. Ănghen", "D. V.I.Lênin"],
        dap_an: "A",
        giai_thich: "Tác phẩm \"Phê phán cương lĩnh Gôta\" là của C. Mác."
    },
    {
        cau: "Câu 43: Tác phẩm nào được Lênin đánh giá là “tác phẩm chủ yếu và cơ bản trình bày chủ nghĩa xã hội khoa học”",
        options: ["A. Chống Đuyrinh", "B. Tư bản", "C. Hệ tư tưởng Đức", "D. Phê phán cương lĩnh Gôta"],
        dap_an: "A", // Suy luận từ Đề 1
        giai_thich: "Tác phẩm \"Chống Đuyrinh\" (của Ph.Ăngghen) được Lênin đánh giá cao."
    },
    {
        cau: "Câu 44: Câu nói : “Thực hiện sự nghiệp giải phóng thế giới ấy - đó là sứ mệnh lịch sử của giai cấp vô sản hiện đại” là của ai",
        options: ["A. Các Mác", "B. Ph. Ăngghen", "C. Lênin", "D. Hồ Chí Minh"],
        dap_an: "A",
        giai_thich: "Câu nói này là của Các Mác."
    },
    {
        cau: "Câu 45: Lý thuyết phân kỳ hình thái kinh tế-xã hội cộng sản chủ nghĩa lần đầu tiên được đề cập trong tác phẩm nào?",
        options: ["A. Tuyên ngôn của Đảng cộng sản.", "B. Nội chiến ở Pháp.", "C. Bộ tư bản", "D. Phê phán Cương lĩnh Gôta."],
        dap_an: "D",
        giai_thich: "Lý thuyết này lần đầu được đề cập trong tác phẩm \"Phê phán Cương lĩnh Gôta\"."
    },
    {
        cau: "Câu 46: Quốc tế cộng sản là tên gọi khác của",
        options: ["A. Quốc tế I", "B. Quốc tế II", "C. Quốc tế III", "D. Hội liên hiệp công nhân quốc tế"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Quốc tế Cộng sản là tên gọi khác của Quốc tế III."
    },
    {
        cau: "Câu 47: Tác phẩm đầu tiên mà Các Mác và Ăng ghen viết chung là tác phẩm nào?",
        options: ["A. Hệ tư tưởng Đức.", "B. Tuyên ngôn Đảng Cộng sản.", "C. Gia đình thần thánh.", "D. Tình cảnh giai cấp công nhân Anh"],
        dap_an: "C", // Suy luận từ Đề 1
        giai_thich: "Tác phẩm đầu tiên viết chung là \"Gia đình thần thánh\"."
    },
    {
        cau: "Câu 48: Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học.",
        options: ["A. Hệ tư tưởng Đức", "B. Tình cảnh giai cấp lao động ở Anh", "C. Tuyên ngôn của Đảng cộng sản", "D. Những nguyên lý của chủ nghĩa cộng sản"],
        dap_an: "C",
        giai_thich: "Tác phẩm \"Tuyên ngôn của Đảng cộng sản\" đánh dấu sự ra đời của CNXHKH."
    },
    {
        cau: "Câu 49: Lần đầu tiên Ph.Ăngghen nói chủ nghĩa Mác cấu thành bởi ba bộ phận trong tác phẩm nào?",
        options: ["A. Sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học", "B. Tình cảnh giai cấp công nhân Anh", "C. Tuyên ngôn của Đảng cộng sản", "D. Chống Đuyrinh"],
        dap_an: "D", // Suy luận từ Đề 1
        giai_thich: "Tác phẩm \"Chống Đuyrinh\" là nơi Ph.Ăngghen lần đầu tiên nói về ba bộ phận cấu thành Chủ nghĩa Mác."
    },
    {
        cau: "Câu 50: Phát hiện nào sau đây của C. Mác và Ph. Ăngghen?",
        options: ["A. Chủ nghĩa duy vật lịch sử", "B. Học thuyết giá trị thặng dư", "C. Sứ mệnh lịch sử của giai cấp công nhân", "D. Cả A, B, C"],
        dap_an: "D",
        giai_thich: "Cả ba đều là phát kiến vĩ đại của C. Mác và Ph. Ăngghen."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 5 ---
const de5 = [
    {
        cau: "Câu 1: Người mơ ước xây dựng thành phố mặt trời, mà trong đó không có nạn thất nghiệp, không có kẻ lười biếng, ai cũng lao động. Ông là ai?",
        options: ["A. Giê-rắc Uynxteli", "B. Grắc Babơp", "C. Tômađô Cămpanela", "D. Tô mát Mo rơ"],
        dap_an: "C",
        giai_thich: "Tômađô Campanenla là tác giả của \"Thành phố Mặt Trời\"."
    },
    {
        cau: "Câu 2: Nhà tư tưởng xã hội chủ nghĩa nào đã tiến hành thực nghiệm xã hội cộng sản trong lòng xã hội tư bản?",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Grắccơ Babớp", "D. Rôbớt Ôoen"],
        dap_an: "D",
        giai_thich: "Rôbớt Ôoen là người đã tiến hành thực nghiệm xã hội cộng sản."
    },
    {
        cau: "Câu 3: Nhà tư tưởng xã hội chủ nghĩa nào đã bị phá sản trong khi thực nghiệm tư tưởng cộng sản chủ nghĩa của mình?",
        options: ["A. Xanh Ximông", "B. Sáclơ Phuriê", "C. Rôbớt Ôoen", "D. Tômát Morơ"],
        dap_an: "C",
        giai_thich: "Rôbớt Ôoen đã bị phá sản khi thực hiện mô hình New Harmony."
    },
    {
        cau: "Câu 4: Những đại biểu tiêu biểu cho chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX ở Pháp và Anh?",
        options: ["A. Xanh xi mông", "B. Phuriê", "C. Rô Bớc Ô Oen", "D. Cả A, B, C."],
        dap_an: "D",
        giai_thich: "Các đại biểu tiêu biểu là Xanh Ximông, Phuriê (Pháp) và Rôbớt Ôoen (Anh)."
    },
    {
        cau: "Câu 5: Chọn những tác giả nào đúng với tác phẩm của họ?",
        options: ["A. To mát Morơ: Tác phẩm Thành phố mặt trời", "B. Tômađô Campanenla: Tác phẩm Không tưởng (Utopie)", "C. Giắccơ Babớp: Tuyên ngôn của những người bình dân", "D. Cả ba đều sai."],
        dap_an: "C",
        giai_thich: "Giắccơ Babớp là tác giả của \"Tuyên ngôn của những người bình dân\"."
    },
    {
        cau: "Câu 6: Những hạn chế cơ bản của các nhà tư tưởng xã hội chủ nghĩa trước Mác là gì?",
        options: [
            "A. Chưa thấy được bản chất bóc lột và quá trình phát sinh phát triển và diệt vong tất yếu của chủ nghĩa tư bản.",
            "B. Không dùng bạo lực cách mạng để xoá bỏ chế độ tư bản chủ nghĩa.",
            "C. Không phát hiện được lực lượng xã hội tiên phong có thể thực hiện cuộc chuyển biến cách mạng...",
            "D. Cả A, B và C"
        ],
        dap_an: "D",
        giai_thich: "Các hạn chế cơ bản là: Không thấy được quy luật vận động, không tìm được lực lượng tiên phong, và không dùng bạo lực cách mạng."
    },
    {
        cau: "Câu 7: Nguyên nhân chủ yếu của những hạn chế của chủ nghĩa xã hội không tưởng là?",
        options: ["A. Do trình độ nhận thức của những nhà tư tưởng.", "B. Do khoa học chưa phát triển.", "C. Do những điều kiện lịch sử khách quan quy định.", "D. Cả A, B, C."],
        dap_an: "C",
        giai_thich: "Hạn chế là do những điều kiện lịch sử khách quan quy định."
    },
    {
        cau: "Câu 8: C. Mác sinh ngày tháng năm nào?",
        options: ["A. 14.3.1918", "B. 5.5.1820", "C. 5.5.1818", "D. 22.4.1818"],
        dap_an: "C",
        giai_thich: "C. Mác sinh ngày 5.5.1818."
    },
    {
        cau: "Câu 9: C. Mác mất ngày tháng năm nào?",
        options: ["A. 14.3.1883", "B. 14.3.1881", "C. 5.8.1883", "D. 21.1.1883"],
        dap_an: "A",
        giai_thich: "C. Mác mất ngày 14.3.1883."
    },
    {
        cau: "Câu 10: Ph. Ăngghen sinh ngày tháng năm nào?",
        options: ["A. 25.11.1818", "B. 28.11.1820", "C. 5.5.1820", "D. 22.4.1820"],
        dap_an: "B",
        giai_thich: "Ph. Ăngghen sinh ngày 28.11.1820."
    },
    {
        cau: "Câu 11: Ph. Ăngghen mất ngày tháng năm nào?",
        options: ["A. 14.3.1888", "B. 5.8.1895", "C. 28.11.1895", "D. 21.1.1895"],
        dap_an: "B",
        giai_thich: "Ph. Ăngghen mất ngày 5.8.1895."
    },
    {
        cau: "Câu 12: Ai là người được Ph.Ăngghen nhận xét là \"có tầm mắt rộng thiên tài\"?",
        options: ["A. Phurie", "B. Ôoen", "C. G. Ba lớp", "D. Xanh Ximông"],
        dap_an: "D",
        giai_thich: "Người đó là Xanh Ximông."
    },
    {
        cau: "Câu 13: Ai là người được Ph.Ăngghen đánh giá là \"nắm phép biện chứng một cách cũng tài tình như Hêghen là người đương thời với ông\"?",
        options: ["A. Mê li ê", "B. Xanh Ximông", "C. Phurie", "D. Ôoen"],
        dap_an: "B",
        giai_thich: "Người đó là Xanh Ximông."
    },
    {
        cau: "Câu 14: Ai là người được Ph.Ăngghen nhận xét \"Mọi phong trào xã hội, mọi thành tựu thực sự đã diễn ra ở Anh vì lợi ích của công nhân đều gắn với tên tuổi của ông\" ông là ai?",
        options: ["A. G. Uyn xtlenli", "B. Xanh Ximông", "C. Các Mác", "D. Ôoen"],
        dap_an: "D",
        giai_thich: "Người đó là Rôbớt Ôoen."
    },
    {
        cau: "Câu 15: Ai là người nêu ra quan điểm: \"Dân vi quý, xã tắc thứ chi, quân vi khinh\" (Dân là trọng hơn cả, xã tắc đứng đằng sau, vua còn nhẹ hơn\"?",
        options: ["A. Khổng Tử", "B. Mạnh Tử", "C. Hàn Phi Tử", "D. Tuân tử"],
        dap_an: "B",
        giai_thich: "Quan điểm này là của Mạnh Tử."
    },
    {
        cau: "Câu 16: Ai trong số những người sau đây được Các Mác coi là nhà tư tưởng vĩ đại nhất thời cổ đại?",
        options: ["A. Đêmôcrit", "B. Êpiquyarơ", "C. Aristôt", "D. Platôn"],
        dap_an: "C",
        giai_thich: "Các Mác coi Aristôt là nhà tư tưởng vĩ đại nhất thời cổ đại."
    },
    {
        cau: "Câu 17: Nội dung cơ bản nhất mà nhờ đó chủ nghĩa xã hội từ không tưởng trở thành khoa học?",
        options: [
            "A. Lên án mạnh mẽ chủ nghĩa tư bản.",
            "B. Phản ánh đúng khát vọng của nhân dân lao động bị áp bức.",
            "C. Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu CNTB, xây dựng CNXH.",
            "D. Chỉ ra sự cần thiết phải thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội."
        ],
        dap_an: "C",
        giai_thich: "Phát hiện ra sứ mệnh lịch sử của giai cấp công nhân là nội dung cơ bản nhất."
    },
    {
        cau: "Câu 18: Những điều kiện và tiền đề khách quan nào dẫn đến sự ra đời của chủ nghĩa xã hội khoa học:",
        options: [
            "A. Sự ra đời và phát triển của nền đại công nghiệp tư bản chủ nghĩa",
            "B. Sự trưởng thành của giai cấp công nhân công nghiệp",
            "C. Những thành tựu khoa học tự nhiên và tư tưởng lí luận đầu thế kỉ 19",
            "D. Cả A, B và C"
        ],
        dap_an: "D",
        giai_thich: "Các tiền đề khách quan là: Điều kiện kinh tế-xã hội (A, B) và Tiền đề khoa học và tư tưởng lý luận (C)."
    },
    {
        cau: "Câu 19: Tiền đề nào là nguồn gốc lý luận trực tiếp của chủ nghĩa xã hội khoa học?",
        options: ["A. Triết học cổ điển Đức", "B. Kinh tế chính trị học cổ điển Anh", "C. Chủ nghĩa xã hội không tưởng – phê phán", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Cả ba (Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, Chủ nghĩa xã hội không tưởng phê phán) đều là nguồn gốc lý luận trực tiếp."
    },
    {
        cau: "Câu 20: Ph. Ăngghen đã đánh giá: \"Hai phát hiện vĩ đại này đã đưa chủ nghĩa xã hội trở thành một khoa học\". Hai phát kiến đó là gì?",
        options: [
            "A. Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử",
            "B. Sứ mệnh lịch sử của giai cấp công nhân – Học thuyết giá trị thặng dư",
            "C. Học thuyết giá trị thặng dư – Chủ nghĩa duy vật lịch sử",
            "D. Sứ mệnh lịch sử của giai cấp công nhân – Chủ nghĩa duy vật lịch sử"
        ],
        dap_an: "C",
        giai_thich: "Hai phát kiến vĩ đại là Học thuyết giá trị thặng dư và Chủ nghĩa duy vật lịch sử."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 6 ---
const de6 = [
    {
        cau: "Câu 1: Vì sao chủ nghĩa xã hội khoa học theo nghĩa rộng là chủ nghĩa Mác - Lênin?",
        options: [
            "A. Vì CNXHKH đã phác thảo ra mô hình CNXH và chủ nghĩa cộng sản.",
            "B. Vì CNXHKH đã luận chứng về sứ mệnh lịch sử của giai cấp công nhân hiện đại.",
            "C. Vì CNXHKH dựa vào triết học, kinh tế chính trị để lý giải tính tất yếu lịch sử của Cách mạng XHCN và Hình thái kinh tế – xã hội cộng sản chủ nghĩa gắn liền với vai trò lãnh đạo của giai cấp công nhân.",
            "D. Cả A, B và C."
        ],
        dap_an: "C",
        giai_thich: "CNXHKH là một bộ phận cấu thành trong chủ nghĩa Mác - Lênin. Nó sử dụng nền tảng của Triết học Mác – Lênin và Kinh tế chính trị Mác – Lênin để lý giải tính tất yếu lịch sử."
    },
    {
        cau: "Câu 2: Tác phẩm “Phê phán cương lĩnh Gôta” là của ai?",
        options: ["A. C. Mác", "B. Ph. Ănghen", "C. C. Mác và Ph. Ănghen", "D. V. I. Lênin"],
        dap_an: "A",
        giai_thich: "Tác phẩm này là của C. Mác."
    },
    {
        cau: "Câu 3: Tác phẩm nào được Lênin đánh giá là “tác phẩm chủ yếu và cơ bản trình bày chủ nghĩa xã hội khoa học”?",
        options: ["A. Chống Đuyrinh", "B. Tư bản", "C. Hệ tư tưởng Đức", "D. Phê phán cương lĩnh Gôta"],
        dap_an: "B", // Dựa trên nguồn: Nguồn cung cấp là B (Tư bản), nhưng theo Đề 1/43 là A (Chống Đuyrinh). Ta dùng B theo nguồn Đề 6.
        giai_thich: "Tác phẩm \"Tư bản\" được Lênin đánh giá cao."
    },
    {
        cau: "Câu 4: Câu nói: “Thực hiện sự nghiệp giải phóng thế giới ấy - đó là sứ mệnh lịch sử của giai cấp vô sản hiện đại” là của ai?",
        options: ["A. Các Mác", "B. Ph. Ăngghen", "C. Lênin", "D. Hồ Chí Minh"],
        dap_an: "B", // Dựa trên nguồn: Nguồn cung cấp là B (Ph. Ăngghen), nhưng theo Đề 1/44 là A (Các Mác). Ta dùng B theo nguồn Đề 6.
        giai_thich: "Câu nói này được gán cho Ph. Ăngghen trong nguồn."
    },
    {
        cau: "Câu 5: Lý thuyết phân kỳ hình thái kinh tế-xã hội cộng sản chủ nghĩa lần đầu tiên được đề cập trong tác phẩm nào?",
        options: ["A. Tuyên ngôn của Đảng cộng sản.", "B. Nội chiến ở Pháp.", "C. Bộ tư bản", "D. Phê phán Cương lĩnh GôtA."],
        dap_an: "A", // Dựa trên nguồn: Nguồn cung cấp là A (Tuyên ngôn), nhưng theo Đề 1/45 là D (Phê phán Cương lĩnh Gôta). Ta dùng A theo nguồn Đề 6.
        giai_thich: "Lý thuyết này được đề cập lần đầu trong Tuyên ngôn của Đảng Cộng sản."
    },
    {
        cau: "Câu 6: Quốc tế cộng sản là tên gọi khác của",
        options: ["A. Quốc tế I", "B. Quốc tế II", "C. Quốc tế III", "D. Hội liên hiệp công nhân quốc tế"],
        dap_an: "C",
        giai_thich: "Quốc tế cộng sản là tên gọi khác của Quốc tế III."
    },
    {
        cau: "Câu 7: Tác phẩm đầu tiên mà Các Mác và Ăng ghen viết chung là tác phẩm nào?",
        options: ["A. Hệ tư tưởng ĐứC.", "B. Tuyên ngôn Đảng Cộng sản.", "C. Gia đình thần thánh.", "D. Tình cảnh giai cấp công nhân Anh"],
        dap_an: "C",
        giai_thich: "Tác phẩm đầu tiên viết chung là \"Gia đình thần thánh\"."
    },
    {
        cau: "Câu 8: Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        options: ["A. Hệ tư tưởng Đức", "B. Tình cảnh giai cấp lao động ở Anh", "C. Tuyên ngôn của Đảng cộng sản", "D. Những nguyên lý của chủ nghĩa cộng sản"],
        dap_an: "C",
        giai_thich: "Tuyên ngôn của Đảng Cộng sản đánh dấu sự ra đời của CNXHKH."
    },
    {
        cau: "Câu 9: Lần đầu tiên Ph. Ăngghen nói chủ nghĩa Mác cấu thành bởi ba bộ phận trong tác phẩm nào?",
        options: ["A. Sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học", "B. Tình cảnh giai cấp công nhân Anh", "C. Tuyên ngôn của Đảng cộng sản", "D. Chống Đuyrinh"],
        dap_an: "D",
        giai_thich: "Tác phẩm \"Chống Đuyrinh\" là nơi Ph. Ăngghen nói về ba bộ phận cấu thành Chủ nghĩa Mác."
    },
    {
        cau: "Câu 10: Phát hiện nào sau đây của C. Mác và Ph. Ăngghen?",
        options: ["A. Chủ nghĩa duy vật lịch sử", "B. Học thuyết giá trị thặng dư", "C. Sứ mệnh lịch sử của giai cấp công nhân", "D. Cả A, B, C"],
        dap_an: "D",
        giai_thich: "Cả ba đều là phát kiến vĩ đại của C. Mác và Ph. Ăngghen."
    },
    {
        cau: "Câu 11: Phạm trù nào được coi là cơ bản nhất, là xuất phát điểm của chủ nghĩa xã hội khoa học?",
        options: ["A. Giai cấp công nhân", "B. Sứ mệnh lịch sử của giai cấp công nhân", "C. Chuyên chính vô sản", "D. Xã hội chủ nghĩa"],
        dap_an: "B",
        giai_thich: "Sứ mệnh lịch sử của giai cấp công nhân là phạm trù cơ bản và xuất phát điểm của CNXHKH."
    },
    {
        cau: "Câu 12: Câu “Sự phát triển tự do của mọi người là điều kiện cho sự phát triển tự do của tất cả mọi người là cuả ai’’,",
        options: ["A. C. Mác", "B. Ph. Ăng ghen", "C. C. Mác và Ph. Ăng ghen", "D. V. I. Lênin"],
        dap_an: "C",
        giai_thich: "Câu nói nổi tiếng trong Tuyên ngôn của Đảng Cộng sản là của C. Mác và Ph. Ăngghen."
    },
    {
        cau: "Câu 13: C. Mác và Ph. Ăngghen đã dựa vào những phát kiến nào để xây dựng luận chứng về sứ mệnh lịch sử của giai cấp công nhân?",
        options: ["A. Chủ nghĩa xã hội không tưởng – phê phán", "B. Chủ nghĩa duy vật lịch sử và Học thuyết giá trị thặng dư", "C. Triết học cổ điển Đức và Kinh tế chính trị học cổ điển Anh.", "D. Cả ba đều đúng"],
        dap_an: "B",
        giai_thich: "Luận chứng về sứ mệnh lịch sử GCCN dựa trên Chủ nghĩa duy vật lịch sử và Học thuyết giá trị thặng dư."
    },
    {
        cau: "Câu 14: Chủ nghĩa duy vật lịch sử và Học thuyết giá trị thặng dư đã được C. Mác phát triển và trình bày một cách có hệ thống trong tác phẩm nào?",
        options: ["A. Hệ tư tưởng Đức", "B. Tình cảnh của giai cấp lao động ở Anh", "C. Bộ Tư bản", "D. Những nguyên lý của chủ nghĩa cộng sản"],
        dap_an: "C",
        giai_thich: "Học thuyết giá trị thặng dư được trình bày có hệ thống trong Bộ Tư bản."
    },
    {
        cau: "Câu 15: V. I. Lênin sinh ngày tháng năm nào?",
        options: ["A. 5. 5. 1870", "B. 22. 4. 1870", "C. 21. 1. 1922", "D. 28. 1. 1924"],
        dap_an: "B",
        giai_thich: "V. I. Lênin sinh ngày 22. 4. 1870."
    },
    {
        cau: "Câu 16: V. I. Lênin mất ngày tháng năm nào?",
        options: ["A. 22. 4. 1924", "B. 21. 1. 1924", "C. 18. 3. 1870", "D. 28. 11. 1870"],
        dap_an: "B",
        giai_thich: "V. I. Lênin mất ngày 21. 1. 1924."
    },
    {
        cau: "Câu 17: Ai là người đầu tiên đưa chủ nghĩa xã hội từ khoa học thành thực tiễn sinh động?",
        options: ["A. C. Mác", "B. Ph. Ănghen", "C. V. I. Lênin", "D. Hồ Chí Minh"],
        dap_an: "C",
        giai_thich: "V. I. Lênin là người lãnh đạo Cách mạng Tháng Mười Nga, đưa CNXH từ lý luận thành hiện thực."
    },
    {
        cau: "Câu 18: Từ khi ra đời (1848) đến nay, Chủ nghĩa xã hội khoa học phát triển qua mấy giai đoạn chủ yếu?",
        options: ["A. 2", "B. 3", "C. 4", "D. 5"],
        dap_an: "B", // Theo Đề 11/16 là 3 giai đoạn.
        giai_thich: "CNXHKH phát triển qua ba giai đoạn: Mác - Ăngghen, Lênin, và sau Lênin."
    },
    {
        cau: "Câu 19: Nhà nước xã hội chủ nghĩa đầu tiên được thành lập ở đâu?",
        options: ["A. Công xã Pari", "B. Nga", "C. Ba Lan", "D. Trung Quốc"],
        dap_an: "B",
        giai_thich: "Nhà nước XHCN đầu tiên được thành lập ở Nga (Nhà nước Xô viết)."
    },
    {
        cau: "Câu 20: Khái niệm chuyên chính vô sản được Các Mác dùng lần đầu tiên trong tác phẩm nào?",
        options: ["A. Đấu tranh giai cấp ở Pháp", "B. Góp phần phê phán triết học pháp quyền của Hêghen", "C. Phê phán cương lĩnh Gô-ta", "D. Tuyên ngôn của Đảng cộng sản."],
        dap_an: "A", // Theo Đề 19/3, khái niệm này được bàn chi tiết trong Phê phán Cương lĩnh Gôta, nhưng lần đầu xuất hiện là trong Đấu tranh giai cấp ở Pháp.
        giai_thich: "Khái niệm này được Các Mác dùng lần đầu trong tác phẩm 'Đấu tranh giai cấp ở Pháp' (1850)."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 7 ---
const de7 = [
    {
        cau: "Câu 1: Định nghĩa về giai cấp được Lênin trình bày lần đầu tiên trong tác phẩm nào?",
        options: ["A. Một bước tiến, hai bước lùi.", "B. Làm gì?", "C. Sáng kiến vĩ đại."],
        dap_an: "C",
        giai_thich: "Định nghĩa về giai cấp của Lênin được trình bày trong tác phẩm 'Sáng kiến vĩ đại' (1919)."
    },
    {
        cau: "Câu 2: Tìm ra định nghĩa đúng nhất về giai cấp công nhân:",
        options: [
            "A. Là giai cấp bị thống trị.",
            "B. Là giai cấp lao động trong nền sản xuất công nghiệp có trình độ kỹ thuật và công nghệ hiện đại của xã hội.",
            "C. Là giai cấp đông đảo trong dân cư.",
            "D. Là giai cấp bị áp bức bóc lột nặng nề nhất"
        ],
        dap_an: "B",
        giai_thich: "GCCN là giai cấp đại diện cho lực lượng sản xuất tiên tiến, lao động bằng phương thức công nghiệp ngày càng hiện đại."
    },
    // Câu 3 và 4 bị thiếu dữ liệu, bỏ qua
    {
        cau: "Câu 5: Cơ cấu xã hội nào có vai trò quan trọng nhất?",
        options: ["A. Cơ cấu nghề nghiệp", "B. Cơ cấu dân cư", "C. Cơ cấu dân tộc", "D. Cơ cấu giai cấp"],
        dap_an: "D",
        giai_thich: "Cơ cấu xã hội - giai cấp có vị trí quan trọng nhất, chi phối các loại hình cơ cấu xã hội khác."
    },
    {
        cau: "Câu 6: Khái niệm nào trong sau đây được dùng để chỉ một cộng đồng người ổn định được hình thành trong lịch sử trong một lãnh thổ nhất định, có chung mối liên hệ về kinh tế, ngôn ngữ và một nền văn hoá?",
        options: ["A. Bộ lạc", "B. Dân tộc", "C. Quốc gia", "D. Bộ tộc"],
        dap_an: "B",
        giai_thich: "Đây là định nghĩa về Dân tộc (Nation) theo nghĩa rộng."
    },
    {
        cau: "Câu 7: Vì sao giai cấp nông dân không thể lãnh đạo được cuộc cách mạng xã hội chủ nghĩa? (chọn 1 phương án đúng)",
        options: ["A. Họ đông nhưng không mạnh.", "B. Họ không có chính đảng.", "C. Họ không đại diện cho phương thức sản xuất tiên tiến.", "D. Cả a và B."],
        dap_an: "C",
        giai_thich: "Chỉ GCCN đại diện cho phương thức sản xuất tiên tiến và xu thế phát triển tương lai."
    },
    {
        cau: "Câu 8: Đặc trưng nào trong số các đặc trưng sau được coi là đặc trưng cơ bản nhất của giai cấp công nhân nói chung?",
        options: [
            "A. Không có tư liệu sản xuất, phải bán sức lao động.",
            "B. Họ lao động trong nền công nghiệp có trình độ công nghệ và kỹ thuật hiện đại.",
            "C. Bị giai cấp tư sản bóc lột",
            "D. Cả ba đều sai"
        ],
        dap_an: "B",
        giai_thich: "GCCN gắn liền với quá trình phát triển của nền công nghiệp hiện đại, là đại biểu cho phương thức sản xuất mang tính xã hội hóa cao."
    },
    {
        cau: "Câu 9: Ai là tác giả của câu nói: “Chủ nghĩa xã hội hay là chết”",
        options: ["A. V. I. Lênin", "B. Phiđen Castrô", "C. Hồ Chí Minh", "D. Đặng Tiểu Bình"],
        dap_an: "B", // Đáp án này dựa trên kiến thức chung, thường được gán cho Fidel Castro
        giai_thich: "Đây là câu nói nổi tiếng của lãnh tụ Cuba, Phiđen Castrô."
    },
    {
        cau: "Câu 10: Câu nói “Chủ nghĩa đế quốc là sự chuẩn bị vật chất đầy đủ nhất cho cách mạng vô sản” là của:",
        options: ["A. Các Mác", "B. Ăngghen", "C. V. I Lênin", "D. Hồ Chí Minh"],
        dap_an: "C",
        giai_thich: "Đây là luận điểm của V. I. Lênin."
    },
    {
        cau: "Câu 11: Tác phẩm nào được Lênin coi là cuốn bách khoa toàn thư thực sự của chủ nghĩa cộng sản?",
        options: ["A. Sự khốn cùng của triết học", "B. Chống Đuy rinh", "C. Đấu tranh giai cấp ở Pháp", "D. Tuyên ngôn của Đảng cộng sản"],
        dap_an: "B", // Tác phẩm thường được gọi là Bách khoa toàn thư là Chống Đuyrinh (của Ăngghen).
        giai_thich: "Tác phẩm 'Chống Đuy rinh' của Ph. Ăngghen được Lênin đánh giá rất cao."
    },
    {
        cau: "Câu 12: Phát hiện ra sự phân chia xã hội thành giai cấp và đấu tranh giai cấp là công lao của:",
        options: ["A. Các Mác", "B. Ph. Ăng ghen", "C. V. I. Lênin", "D. Các nhà sử học tư sản trước Mác"],
        dap_an: "D",
        giai_thich: "Việc phát hiện ra đấu tranh giai cấp không phải là công lao của Mác, mà của các nhà sử học tư sản. Mác đã phát triển thành lý luận khoa học."
    },
    {
        cau: "Câu 13: Câu nói: “Điểm chủ yếu trong học thuyết của Mác là ở chỗ nó làm sáng tỏ vai trò lịch sử của giai cấp vô sản là người xây dựng chủ nghĩa xã hội\" là của ai?",
        options: ["A. Ph. Ăng ghen.", "B. V. I. Lênin", "C. Hồ Chí Minh", "D. Stalin."],
        dap_an: "B",
        giai_thich: "Đây là trích dẫn nổi tiếng của Lênin về Mác."
    },
    {
        cau: "Câu 14: Cách mạng xã hội chủ nghĩa là quá trình cải biến một cách toàn diện trên tất cả các lĩnh vực của đời sống xã hội... để xây dựng thành công chủ nghĩa xã hội và cuối cùng là chủ nghĩa cộng sản?",
        options: ["A. Đúng", "B. Chưa hoàn toàn đúng", "C. Sai", "D. Có ý sai"],
        dap_an: "A",
        giai_thich: "CMXHCN theo nghĩa rộng là quá trình cải biến toàn diện trên mọi lĩnh vực."
    },
    {
        cau: "Câu 15: Nguyên nhân sâu xa của cách mạng xã hội chủ nghĩa là:",
        options: [
            "A. Mâu thuẫn giữa Lực lượng sản xuất và quan hệ sản xuất",
            "B. Do sự phát triển của lực lượng sản xuất",
            "C. Do sự phát triển của giai cấp công nhân",
            "D. Giai cấp tư sản đã trở thành giai cấp phản động"
        ],
        dap_an: "A",
        giai_thich: "Nguyên nhân sâu xa của sự thay thế hình thái kinh tế là mâu thuẫn giữa LLSX và QHSX."
    },
    {
        cau: "Câu 16: Tiến trình của cách mạng xã hội chủ nghĩa có mấy giai đoạn?",
        options: ["A. Một", "B. Hai", "C. Ba", "D. Bốn"],
        dap_an: "B",
        giai_thich: "Mác và Ăngghen phân chia HTKTXH CSCN thành 2 giai đoạn: giai đoạn thấp (XHCN) và giai đoạn cao (CSCN)."
    },
    {
        cau: "Câu 17: Điều kiện chủ quan có vai trò quyết định nhất của cuộc cách mạng xã hội chủ nghĩa?",
        options: [
            "A. Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất tư bản chủ nghĩa.",
            "B. Mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản.",
            "C. Sự trưởng thành của giai cấp công nhân, đặc biệt khi nó đã có đảng tiên phong lãnh đạo.",
            "D. Giai cấp công nhân liên minh được với giai cấp công nhân nông dân."
        ],
        dap_an: "C",
        giai_thich: "Sự trưởng thành của giai cấp công nhân, đặc biệt là vai trò lãnh đạo của Đảng Cộng sản, là nhân tố chủ quan quan trọng nhất."
    },
    {
        cau: "Câu 18: Công xã Pari ra đời vào ngày tháng năm nào?",
        options: ["A. 22. 6. 1848", "B. 18. 3. 1871", "C. 4. 9. 1870", "D. 28. 5. 1871"],
        dap_an: "B",
        giai_thich: "Công xã Pari ra đời vào ngày 18. 3. 1871."
    },
    {
        cau: "Câu 19: Động lực của cuộc cách mạng xã hội chủ nghĩa?",
        options: [
            "A. Giai cấp tư sản, giai cấp công nhân, giai cấp nông dân.",
            "B. Giai cấp công nhân, giai cấp nông dân, tầng lớp trí thức.",
            "C. Giai cấp nông dân, giai cấp công nhân, tiểu tư sản.",
            "D. Giai cấp công nhân, tầng lớp trí thức, giai cấp nông dân, tiểu tư sản."
        ],
        dap_an: "B",
        giai_thich: "CMXHCN được thực hiện thông qua khối liên minh Công - Nông - Trí thức dưới sự lãnh đạo của Đảng Cộng sản."
    },
    {
        cau: "Câu 20: Ai là người đầu tiên đưa ra khái niệm cách mạng dân chủ tư sản kiểu mới?",
        options: ["A. C. Mác", "B. Ph. Ăngghen", "C. C. Mác và Ph. Ăngghen", "D. V. I. Lênin"],
        dap_an: "D",
        giai_thich: "Lenin đã hoàn chỉnh lý luận về CMXHCN và cách mạng dân chủ tư sản kiểu mới."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 8 ---
const de8 = [
    {
        cau: "Câu 1: Cách mạng dân chủ tư sản kiểu mới do giai cấp, tầng lớp nào lãnh đạo?",
        options: ["A. Giai cấp tư sản", "B. Giai cấp công nhân", "C. Tầng lớp trí thức", "D. Giai cấp nông dân"],
        dap_an: "B",
        giai_thich: "Theo lý luận Mác-Lênin (được phát triển bởi V.I. Lênin), cách mạng dân chủ tư sản kiểu mới là cuộc cách mạng do giai cấp công nhân lãnh đạo."
    },
    {
        cau: "Câu 2: Cách mạng dân chủ tư sản do giai cấp, tầng lớp nào lãnh đạo?",
        options: ["A. Giai cấp công nhân", "B. Giai cấp tư sản", "C. Giai cấp công nhân và giai cấp tư sản", "D. Giai cấp công nhân và giai cấp nông dân"],
        dap_an: "B",
        giai_thich: "Cách mạng dân chủ tư sản kiểu cũ (cơ bản) do giai cấp tư sản lãnh đạo."
    },
    {
        cau: "Câu 3: Điều kiện để thực hiện sự chuyển biến từ cách mạng dân chủ tư sản kiểu mới lên cách mạng xã hội chủ nghĩa là gì?",
        options: ["A. Đảng cộng sản giữ vững vai trò lãnh đạo", "B. Liên minh công nông được củng cố và tăng cường", "C. Chính quyền của công nhân và nông dân được thiết lập chuyển lê làm nhiệm vụ của CCVS.", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Cả ba yếu tố (lãnh đạo của Đảng, liên minh công-nông, chính quyền vô sản) là điều kiện cho sự chuyển biến."
    },
    {
        cau: "Câu 4: Cách mạng xã hội chủ nghĩa do giai cấp, tầng lớp nào lãnh đạo?",
        options: ["A. Giai cấp công nhân, giai cấp nông dân", "B. Giai cấp công nhân, giai cấp nông dân, tầng lớp trí thức", "C. Giai cấp công nhân", "D. Giai cấp công nhân, giai cấp tư sản, giai cấp nông dân"],
        dap_an: "C",
        giai_thich: "Cách mạng XHCN phải do Đảng Cộng sản - đội tiền phong của giai cấp công nhân - lãnh đạo."
    },
    {
        cau: "Câu 5: Mục tiêu của giai đoạn thứ nhất của cách mạng xã hội chủ nghĩa là gì?",
        options: ["A. Giải phóng con người, giải phóng xã hội", "B. Giành chính quyền về tay giai cấp công nhân và nhân dân lao động", "C. Xóa bỏ bóc lột đem lại đời sống ấm no cho nhân dân", "D. Cả ba đều đúng"],
        dap_an: "B",
        giai_thich: "Mục tiêu chính trị cơ bản trong giai đoạn đầu của cách mạng vô sản là giành chính quyền."
    },
    {
        cau: "Câu 6: Mục tiêu cuối cùng của giai cấp công nhân, của cuộc cách mạng xã hội chủ nghĩa là?",
        options: ["A. Giành chính quyền", "B. Giải phóng con người, giải phóng xã hội", "C. Đánh đổ chủ nghĩa tư bản", "D. Cả a, ba và C."],
        dap_an: "B",
        giai_thich: "Sứ mệnh lịch sử tổng quát của giai cấp công nhân là giải phóng loài người vĩnh viễn khỏi mọi áp bức, bóc lột, xây dựng CNXH/CNCS."
    },
    {
        cau: "Câu 7: Mục tiêu cuối cùng của cách mạng xã hội chủ nghĩa là gì?",
        options: ["A. Xoá bỏ chế độ tư hữu", "B. Giải phóng con người, giải phóng xã hội", "C. Giành chính quyền về tay giai cấp công nhân", "D. Xoá bỏ chế độ tư bản chủ nghĩa"],
        dap_an: "B",
        giai_thich: "Giải phóng con người, giải phóng xã hội là lý tưởng và mục tiêu tối cao."
    },
    {
        cau: "Câu 8: Cách mạng xã hội chủ nghĩa lần đầu tiên nổ ra và thắng lợi ở đâu?",
        options: ["A. Pháp", "B. Việt Nam", "C. Nga", "D. Trung Quốc"],
        dap_an: "C",
        giai_thich: "Cách mạng Tháng Mười Nga (1917) là cuộc cách mạng XHCN thắng lợi đầu tiên."
    },
    {
        cau: "Câu 9: Cách mạng dân chủ tư sản kiểu cũ và cách mạng dân chủ tư sản kiểu mới khác nhau ở điểm nào?",
        options: ["A. Đối tượng của cách mạng.", "B. Lực lượng tham gia.", "C. Lực lượng lãnh đạo.", "D. Cả A, B, C"],
        dap_an: "C",
        giai_thich: "Sự khác biệt cốt lõi là ở vai trò lãnh đạo: kiểu cũ do giai cấp tư sản lãnh đạo; kiểu mới do giai cấp công nhân lãnh đạo."
    },
    {
        cau: "Câu 10: Động lực cơ bản, chủ yếu của cách mạng xã hội chủ nghĩa là?",
        options: ["A. Giai cấp nông dân.", "B. Giai cấp công nhân", "C. Giai cấp tư sản.", "D. Cả A, B, C"],
        dap_an: "B",
        giai_thich: "Giai cấp công nhân là lực lượng tiên phong, giữ vai trò chủ đạo và lãnh đạo cách mạng."
    },
    {
        cau: "Câu 11: Hình thức đầu tiên của chuyên chính vô sản là?",
        options: ["A. Công xã Pari", "B. Nhà nước Xô viết", "C. Nhà nước dân chủ nhân dân", "D. Nhà nước xã hội chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Công xã Pari (1871) là hình thức chuyên chính vô sản đầu tiên trong lịch sử."
    },
    {
        cau: "Câu 12: Giai cấp nào không có hệ tư tưởng riêng?",
        options: ["A. Giai cấp tư sản.", "B. Giai cấp vô sản", "C. Giai cấp nông dân", "D. Giai cấp phong kiến"],
        dap_an: "C",
        giai_thich: "Giai cấp nông dân thường được xem là giai cấp không có hệ tư tưởng độc lập."
    },
    {
        cau: "Câu 13: Trí thức được quan niệm là:",
        options: ["A. Một giai cấp", "B. Một tầng lớp", "C. Cả a, b đều sai", "D. Cả a, b đều đúng"],
        dap_an: "B",
        giai_thich: "Trong cơ cấu xã hội - giai cấp thời kỳ quá độ lên CNXH, trí thức là một tầng lớp xã hội cơ bản."
    },
    {
        cau: "Câu 14: Tôn giáo hình thành là do:",
        options: ["A. Trình độ nhận thức", "B. Trong xã hội có áp bức bóc lột.", "C. Do tâm lý, tình cảm.", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Các nguồn gốc của tôn giáo bao gồm nguồn gốc nhận thức, nguồn gốc kinh tế - xã hội, và nguồn gốc tâm lý."
    },
    // Câu 15 bị trống trong nguồn, bỏ qua
    {
        cau: "Câu 16: Ai đã nhận xét: “Ý nghĩa của chủ nghĩa không tưởng phê phán và của chủ nghĩa cộng sản không tưởng phê phán là tỉ lệ nghịch với thời gian”?",
        options: ["A. C. Mác", "B. Ph. Ăng ghen", "C. C. Mác và Ph. Ăng ghen", "D. V. I. Lênin"],
        dap_an: "B",
        giai_thich: "Trích dẫn này là của Ph. Ăngghen."
    },
    {
        cau: "Câu 17: Khi phân tích về thời kỳ quá độ lên chủ nghĩa xã hội, ai là người đầu đặt vấn đề phải học tập các kinh nghiệm tổ chức, quản lý kinh tế của chủ nghĩa tư bản để cải tạo nền kinh tế tiểu nông lạc hậu?",
        options: ["A. C. Mác", "B. V. I. Lênin", "C. Stalin", "D. Hồ Chí Minh"],
        dap_an: "B",
        giai_thich: "V.I. Lênin đã phát triển lý luận về việc sử dụng các thành tựu, kinh nghiệm tổ chức, quản lý của tư bản trong thời kỳ quá độ."
    },
    {
        cau: "Câu 18: Ai là người đưa ra tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội?",
        options: ["A. V. I. Lênin", "B. Hồ Chí Minh", "C. Đặng Tiểu Bình", "D. Phạm Văn Đồng"],
        dap_an: "B",
        giai_thich: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là quy luật của cách mạng Việt Nam, do Hồ Chí Minh đề xướng."
    },
    {
        cau: "Câu 19: Câu “Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kì cải biến cách mạng từ xã hội nọ sang xã hội kia... là của ai?",
        options: ["A. C. Mác", "B. Ph. Ăng ghen", "C. C. Mác và Ph. Ăng ghen", "D. V. I. Lênin"],
        dap_an: "A",
        giai_thich: "Luận điểm này của C. Mác nằm trong tác phẩm Phê phán Cương lĩnh Gôta."
    },
    {
        cau: "Câu 20: Có mấy hình thức quá độ lên chủ nghĩa xã hội?",
        options: ["A. Hai", "B. Ba", "C. Bốn", "D. Cả A, B và C"],
        dap_an: "A",
        giai_thich: "Lý luận Mác-Lênin thường chia quá độ thành hai hình thức: trực tiếp và gián tiếp/bỏ qua."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 9 ---
const de9 = [
    {
        cau: "Câu 1: Cách mạng dân chủ tư sản kiểu mới do giai cấp, tầng lớp nào lãnh đạo?",
        options: ["A. Giai cấp tư sản", "B. Giai cấp công nhân", "C. Tầng lớp trí thức", "D. Giai cấp nông dân"],
        dap_an: "B",
        giai_thich: "Cách mạng dân chủ tư sản kiểu mới là cuộc cách mạng do giai cấp công nhân lãnh đạo."
    },
    {
        cau: "Câu 2: Cách mạng dân chủ tư sản do giai cấp, tầng lớp nào lãnh đạo?",
        options: ["A. Giai cấp công nhân", "B. Giai cấp tư sản", "C. Giai cấp công nhân và giai cấp tư sản", "D. Giai cấp công nhân và giai cấp nông dân"],
        dap_an: "B",
        giai_thich: "Cách mạng dân chủ tư sản kiểu cũ (cơ bản) do giai cấp tư sản lãnh đạo."
    },
    {
        cau: "Câu 3: Điều kiện để thực hiện sự chuyển biến từ cách mạng dân chủ tư sản kiểu mới lên cách mạng xã hội chủ nghĩa là gì?",
        options: ["A. Đảng cộng sản giữ vững vai trò lãnh đạo", "B. Liên minh công nông được củng cố và tăng cường", "C. Chính quyền của công nhân và nông dân được thiết lập chuyển lê làm nhiệm vụ của CCVS.", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Cả ba yếu tố (lãnh đạo của Đảng, liên minh công-nông, chính quyền vô sản) là điều kiện cho sự chuyển biến."
    },
    {
        cau: "Câu 4: Cách mạng xã hội chủ nghĩa do giai cấp, tầng lớp nào lãnh đạo?",
        options: ["A. Giai cấp công nhân, giai cấp nông dân", "B. Giai cấp công nhân, giai cấp nông dân, tầng lớp trí thức", "C. Giai cấp công nhân", "D. Giai cấp công nhân, giai cấp tư sản, giai cấp nông dân"],
        dap_an: "C",
        giai_thich: "Cách mạng XHCN phải do Đảng Cộng sản - đội tiền phong của giai cấp công nhân - lãnh đạo."
    },
    {
        cau: "Câu 5: Mục tiêu của giai đoạn thứ nhất của cách mạng xã hội chủ nghĩa là gì?",
        options: ["A. Giải phóng con người, giải phóng xã hội", "B. Giành chính quyền về tay giai cấp công nhân và nhân dân lao động", "C. Xóa bỏ bóc lột đem lại đời sống ấm no cho nhân dân", "D. Cả ba đều đúng"],
        dap_an: "B",
        giai_thich: "Mục tiêu chính trị cơ bản trong giai đoạn đầu của cách mạng vô sản là giành chính quyền."
    },
    {
        cau: "Câu 6: Mục tiêu cuối cùng của giai cấp công nhân, của cuộc cách mạng xã hội chủ nghĩa là?",
        options: ["A. Giành chính quyền", "B. Giải phóng con người, giải phóng xã hội", "C. Đánh đổ chủ nghĩa tư bản", "D. Cả a, ba và C."],
        dap_an: "B",
        giai_thich: "Sứ mệnh lịch sử tổng quát của giai cấp công nhân là giải phóng loài người vĩnh viễn khỏi mọi áp bức, bóc lột, xây dựng CNXH/CNCS."
    },
    {
        cau: "Câu 7: Mục tiêu cuối cùng của cách mạng xã hội chủ nghĩa là gì?",
        options: ["A. Xoá bỏ chế độ tư hữu", "B. Giải phóng con người, giải phóng xã hội", "C. Giành chính quyền về tay giai cấp công nhân", "D. Xoá bỏ chế độ tư bản chủ nghĩa"],
        dap_an: "B",
        giai_thich: "Giải phóng con người, giải phóng xã hội là lý tưởng và mục tiêu tối cao."
    },
    {
        cau: "Câu 8: Cách mạng xã hội chủ nghĩa lần đầu tiên nổ ra và thắng lợi ở đâu?",
        options: ["A. Pháp", "B. Việt Nam", "C. Nga", "D. Trung Quốc"],
        dap_an: "C",
        giai_thich: "Cách mạng Tháng Mười Nga (1917) là cuộc cách mạng XHCN thắng lợi đầu tiên."
    },
    {
        cau: "Câu 9: Cách mạng dân chủ tư sản kiểu cũ và cách mạng dân chủ tư sản kiểu mới khác nhau ở điểm nào?",
        options: ["A. Đối tượng của cách mạng.", "B. Lực lượng tham gia.", "C. Lực lượng lãnh đạo.", "D. Cả A, B, C"],
        dap_an: "C",
        giai_thich: "Sự khác biệt cốt lõi là ở vai trò lãnh đạo: kiểu cũ do giai cấp tư sản lãnh đạo; kiểu mới do giai cấp công nhân lãnh đạo."
    },
    {
        cau: "Câu 10: Động lực cơ bản, chủ yếu của cách mạng xã hội chủ nghĩa là?",
        options: ["A. Giai cấp nông dân.", "B. Giai cấp công nhân", "C. Giai cấp tư sản.", "D. Cả A, B, C"],
        dap_an: "B",
        giai_thich: "Giai cấp công nhân là lực lượng tiên phong, giữ vai trò chủ đạo và lãnh đạo cách mạng."
    },
    {
        cau: "Câu 11: Hình thức đầu tiên của chuyên chính vô sản là?",
        options: ["A. Công xã Pari", "B. Nhà nước Xô viết", "C. Nhà nước dân chủ nhân dân", "D. Nhà nước xã hội chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Công xã Pari (1871) là hình thức chuyên chính vô sản đầu tiên trong lịch sử."
    },
    {
        cau: "Câu 12: Giai cấp nào không có hệ tư tưởng riêng?",
        options: ["A. Giai cấp tư sản.", "B. Giai cấp vô sản", "C. Giai cấp nông dân", "D. Giai cấp phong kiến"],
        dap_an: "C",
        giai_thich: "Giai cấp nông dân thường được xem là giai cấp không có hệ tư tưởng độc lập."
    },
    {
        cau: "Câu 13: Trí thức được quan niệm là:",
        options: ["A. Một giai cấp", "B. Một tầng lớp", "C. Cả a, b đều sai", "D. Cả a, b đều đúng"],
        dap_an: "B",
        giai_thich: "Trong cơ cấu xã hội - giai cấp thời kỳ quá độ lên CNXH, trí thức là một tầng lớp xã hội cơ bản."
    },
    // Câu 14 và 15 bị trống trong nguồn Đề 9, bỏ qua
    {
        cau: "Câu 16: Ai đã nhận xét: “Ý nghĩa của chủ nghĩa không tưởng phê phán và của chủ nghĩa cộng sản không tưởng phê phán là tỉ lệ nghịch với thời gian”?",
        options: ["A. C. Mác", "B. Ph. Ăng ghen", "C. C. Mác và Ph. Ăng ghen", "D. V. I. Lênin"],
        dap_an: "B",
        giai_thich: "Trích dẫn này là của Ph. Ăngghen."
    },
    {
        cau: "Câu 17: Khi phân tích về thời kỳ quá độ lên chủ nghĩa xã hội, ai là người đầu đặt vấn đề phải học tập các kinh nghiệm tổ chức, quản lý kinh tế của chủ nghĩa tư bản để cải tạo nền kinh tế tiểu nông lạc hậu?",
        options: ["A. C. Mác", "B. V. I. Lênin", "C. Stalin", "D. Hồ Chí Minh"],
        dap_an: "B",
        giai_thich: "V.I. Lênin đã phát triển lý luận về việc sử dụng các thành tựu, kinh nghiệm tổ chức, quản lý của tư bản trong thời kỳ quá độ."
    },
    {
        cau: "Câu 18: Ai là người đưa ra tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội?",
        options: ["A. V. I. Lênin", "B. Hồ Chí Minh", "C. Đặng Tiểu Bình", "D. Phạm Văn Đồng"],
        dap_an: "B",
        giai_thich: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là quy luật của cách mạng Việt Nam, do Hồ Chí Minh đề xướng."
    },
    {
        cau: "Câu 19: Câu “Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kì cải biến cách mạng từ xã hội nọ sang xã hội kia... là của ai?",
        options: ["A. C. Mác", "B. Ph. Ăng ghen", "C. C. Mác và Ph. Ăng ghen", "D. V. I. Lênin"],
        dap_an: "A",
        giai_thich: "Luận điểm này của C. Mác nằm trong tác phẩm Phê phán Cương lĩnh Gôta."
    },
    {
        cau: "Câu 20: Có mấy hình thức quá độ lên chủ nghĩa xã hội?",
        options: ["A. Hai", "B. Ba", "C. Bốn", "D. Cả A, B và C"],
        dap_an: "A",
        giai_thich: "Lý luận Mác-Lênin thường chia quá độ thành hai hình thức: trực tiếp và gián tiếp/bỏ qua."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 10 ---
const de10 = [
    {
        cau: "Câu 1: Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là bỏ qua yếu tố nào của chủ nghĩa tư bản?",
        options: ["A. Bỏ qua nhà nước của giai cấp tư sản.", "B. Bỏ qua cơ sở kinh tế của chủ nghĩa tư bản.", "C. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư tưởng tư bản chủ nghĩa.", "D. Bỏ qua chế độ áp bức bóc lột của giai cấp tư sản"],
        dap_an: "C",
        giai_thich: "Quá độ bỏ qua CNTB là bỏ qua vai trò thống trị của giai cấp tư sản trong kiến trúc thượng tầng và quan hệ sản xuất."
    },
    {
        cau: "Câu 2: Điền từ thiếu vào ô trống: “bước quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội kẻ thù chủ yếu của chúng ta là giai cấp …, những tập quán thói quen của giai cấp ấy” (V. I. Lênin )",
        options: ["A. Phong kiến", "B. Nông dân", "C. Tiểu tư sản", "D. Tư sản"],
        dap_an: "C",
        giai_thich: "Theo Lênin, kẻ thù chủ yếu trong thời kỳ quá độ là giai cấp tiểu tư sản (với các thói quen tùy tiện, cá nhân chủ nghĩa)."
    },
    {
        cau: "Câu 3: Hình thái kinh tế - xã hội cộng sản chủ nghĩa bắt đầu và kết thúc khi nào?",
        options: ["A. Từ khi Đảng cộng sản ra đời và xây dựng xong chủ nghĩa xã hội.", "B. Bắt đầu từ thời kỳ quá độ cho đến khi xây dựng xong giai đoạn cao của xã hội cộng sản.", "C. Bắt đầu từ giai đoạn cao của xã hội cộng sản và kết thúc ở giai đoạn cao của xã hội cộng sản.", "D. Cả ba đều không đúng."],
        dap_an: "B",
        giai_thich: "HTKTXH CSCN bao gồm giai đoạn thấp (CNXH) và giai đoạn cao (CNCS). Thời kỳ quá độ là thời kỳ cải biến cách mạng từ xã hội nọ sang xã hội kia."
    },
    {
        cau: "Câu 4: Câu “Tôi coi sự phát triển của những hình thái kinh tế xã hội là một quá trình lịch sử tự nhiên” là của ai?",
        options: ["A. C. Mác", "B. Ph. Ăng ghen", "C. Mác và Ph. Ăng ghen", "D. V. I. Lênin"],
        dap_an: "A",
        giai_thich: "Đây là câu nói nổi tiếng của C. Mác trong Lời tựa Góp phần phê phán Kinh tế chính trị học."
    },
    {
        cau: "Câu 5: Hôn nhân tiến bộ dựa trên cơ sở nào?",
        options: ["A. Tình yêu", "B. Tự nguyện", "C. Hôn nhân 1 vợ một chồng", "D. Cả A, B và C"],
        dap_an: "A",
        giai_thich: "Hôn nhân tiến bộ phải dựa trên cơ sở tình yêu, sự tự nguyện và bình đẳng, nhưng tình yêu là nền tảng."
    },
    {
        cau: "Câu 6: Hiện nay tôn giáo nào ở Việt Nam có số lượng tín đồ đông nhất?",
        options: ["A. Phật giáo", "B. Công giáo", "C. Tin lành", "D. Hồi giáo"],
        dap_an: "A",
        giai_thich: "Phật giáo là tôn giáo có số lượng tín đồ và ảnh hưởng lớn nhất ở Việt Nam."
    },
    {
        cau: "Câu 7: Chủ nghĩa xã hội nghiên cứu vấn đề tín ngưỡng, tôn giáo dưới góc độ nào?",
        options: ["A. Góc độ chính trị-xã hội.", "B. Hình thái ý thức xã hội.", "C. Tâm lý-xã hội.", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Vấn đề tôn giáo được nghiên cứu dưới các góc độ: hình thái ý thức xã hội, hiện tượng chính trị-xã hội, và khía cạnh tâm lý."
    },
    {
        cau: "Câu 8: Sự thay đổi căn bản, toàn diện và triệt để một hình thái kinh tế – xã hội này bằng một hình thái kinh tế – xã hội khác là:",
        options: ["A. Đột biến xã hội.", "B. Cách mạng xã hội", "C. Cải cách xã hội", "D. Tiến bộ xã hội"],
        dap_an: "B",
        giai_thich: "CMXH là sự thay thế HTKTXH này bằng HTKTXH khác một cách căn bản, toàn diện và triệt để."
    },
    {
        cau: "Câu 9: Thời kỳ quá độ lên chủ nghĩa xã hội ở trên phạm vi cả nước ta bắt đầu từ khi nào?",
        options: ["A. 1945", "B. 1954", "C. 1975", "D. 1930"],
        dap_an: "C",
        giai_thich: "Việt Nam thống nhất đất nước, cả nước bước vào thời kỳ quá độ lên CNXH từ năm 1975."
    },
    {
        cau: "Câu 10: Xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng có mấy đặc trưng?",
        options: ["A. 5", "B. 6", "C. 7", "D. 8"],
        dap_an: "D",
        giai_thich: "Theo Cương lĩnh (bổ sung, phát triển năm 2011), Việt Nam xác định 8 đặc trưng cơ bản của xã hội XHCN."
    },
    {
        cau: "Câu 11: Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội được Đảng ta nêu ra ở Đại hội nào?",
        options: ["A. Đại hội IV", "B. Đại hội VI", "C. Đại hội VII", "D. Đại hội VIII"],
        dap_an: "C",
        giai_thich: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH được thông qua tại Đại hội VII (1991)."
    },
    {
        cau: "Câu 12: Trong Văn kiện Đại hội IX, Đảng ta xác định phải tiếp thu và kế thừa những gì của chủ nghĩa tư bản trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam?",
        options: ["A. Tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa, đặc biệt về khoa học và công nghệ, để phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế hiện đại.", "B. Tiếp thu, kế thừa mô hình quản lý kinh tế - xã hội và thành tựu khoa học công nghệ.", "C. Tiếp thu, kế thừa những giá trị kinh tế, chính trị, văn hoá - xã hội và pháp luật trong chủ nghĩa tư bản.", "D. Cả ba đều sai"],
        dap_an: "A",
        giai_thich: "Quá độ bỏ qua CNTB là phải tiếp thu những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa, đặc biệt là thành tựu về khoa học và công nghệ."
    },
    {
        cau: "Câu 13: “Thời kì phát triển mới - đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước” được Đảng ta nêu ra ở Đại hội nào?",
        options: ["A. Đại hội VI", "B. Đại hội VII", "C. Đại hội VIII", "D. Đại hội IX"],
        dap_an: "C",
        giai_thich: "Đại hội VIII (1996) đề ra nhiệm vụ đẩy mạnh CNH, HĐH đất nước."
    },
    {
        cau: "Câu 14: Tìm ý đúng cho luận điểm sau: “Cùng với sự phát triển của khoa học và công nghệ ngày càng hiện đại, giai cấp công nhân:",
        options: ["A. Giảm về số lượng và nâng cao về chất lượng.", "B. Tăng về số lượng và nâng cao về chất lượng.", "C. Giảm về số lượng và có trình độ sản xuất ngày càng cao", "D. Cả A, B và C."],
        dap_an: "B",
        giai_thich: "GCCN hiện nay có xu hướng tăng nhanh về số lượng và chất lượng, gắn với phát triển kinh tế tri thức."
    },
    {
        cau: "Câu 15: Xét về phương thức lao động, phương thức sản xuất, giai cấp công nhân mang thuộc tính cơ bản nào?",
        options: ["A. Có số lượng đông nhất trong dân cư.", "B. Là giai cấp tạo ra của cải vật chất làm giàu cho xã hội", "C. Là giai cấp trực tiếp vận hành máy móc có tính chất công nghiệp ngày càng hiện đại", "D. Cả A, B và C"],
        dap_an: "C",
        giai_thich: "Giai cấp công nhân lao động bằng phương thức công nghiệp ngày càng hiện đại và gắn liền với quá trình sản xuất vật chất hiện đại."
    },
    {
        cau: "Câu 16: Xét trong quan hệ sản xuất tư bản chủ nghĩa giai cấp công nhân là:",
        options: ["A. Giai cấp nghèo khổ nhất", "B. Giai cấp không có tư liệu sản xuất, đi làm thuê cho nhà tư bản, bị nhà tư bản bóc lột giá trị thặng dư", "C. Giai cấp có số lượng đông trong dân cư", "D. Cả A, B và C đều đúng"],
        dap_an: "B",
        giai_thich: "Dưới CNTB, GCCN là người làm thuê, không có tư liệu sản xuất, bị bóc lột giá trị thặng dư."
    },
    {
        cau: "Câu 17: Nội dung sứ mệnh lịch sử của giai cấp công nhân là:",
        options: ["A. Xoá bỏ chế độ tư bản chủ nghĩa, xoá bỏ chế độ người bóc lột người", "B. Giải phóng giai cấp công nhân, nhân dân lao động và toàn thể nhân loại khỏi mọi sự áp bức, bóc lột, nghèo nàn lạc hậu.", "C. Xây dựng xã hội cộng sản chủ nghĩa văn minh", "D. Cả A, B và C đều đúng"],
        dap_an: "D",
        giai_thich: "Sứ mệnh lịch sử tổng quát của GCCN là giải phóng mọi áp bức, bóc lột và xây dựng xã hội XHCN/CSCN văn minh."
    },
    {
        cau: "Câu 18: Chọn từ thích hợp điền vào ô trống “đối với chúng ta, chủ nghĩa cộng sản không phải là một …. (1) cần phải sáng tạo ra, không phải là một …(2) mà hiện thực phải khuôn theo. Chúng ta gọi chủ nghĩa cộng sản là một phong trào…. (3) nó xoá bỏ trạng thái hiện nay” (C. Mác: Hệ tư tưởng Đức).",
        options: ["A. Lý tưởng (1), trạng thái (2), hiện thực (3)", "B. Trạng thái (1), lý tưởng (2), hiện thực (3)", "C. Trạng thái (1), hiện thực (2), lý tưởng (3)", "D. Hiện thực (1), lý tưởng (2), trạng thái (3)"],
        dap_an: "B",
        giai_thich: "Đây là trích dẫn kinh điển của C. Mác trong Hệ tư tưởng Đức, khẳng định CNCS là một phong trào hiện thực."
    },
    {
        cau: "Câu 19: Sứ mệnh lịch sử của giai cấp công nhân do các yếu tố khách quan nào quy định?",
        options: ["A. Địa vị kinh tế - xã hội và đặc điểm chính trị - xã hội", "B. Là con đẻ của nền đại công nghiệp", "C. Do sự phát triển của lực lượng sản xuất hiện đại", "D. Cả A, B và C"],
        dap_an: "A",
        giai_thich: "Các yếu tố khách quan quy định sứ mệnh lịch sử của GCCN bao gồm địa vị kinh tế-xã hội và đặc điểm chính trị-xã hội của giai cấp này."
    },
    {
        cau: "Câu 20: Giai cấp công nhân là giai cấp triệt để cách mạng bởi vì:",
        options: ["A. Xoá bỏ chủ nghĩa tư bản và xây dựng chủ nghĩa xã hội", "B. Là giai cấp không có tư liệu sản xuất", "C. Là giai cấp cùng khổ nhất trong xã hội", "D. Là giai cấp thực hiện xoá bỏ mọi chế độ tư hữu"],
        dap_an: "D",
        giai_thich: "GCCN là giai cấp triệt để nhất vì họ đấu tranh nhằm xóa bỏ tận gốc rễ của chế độ bóc lột, tức là xoá bỏ chế độ tư hữu về tư liệu sản xuất."
    }
];

// --- DỮ LIỆU ĐỀ SỐ 11 MỚI ---
const de11 = [
    {
        cau: "Câu 1: Theo Lênin, quy luật hình thành và phát triển Đảng cộng sản của giai cấp công nhân là:",
        options: ["A. Chủ nghĩa Mác kết hợp với phong trào công nhân", "B. Chủ nghĩa Mác – Lênin kết hợp với Phong trào công nhân", "C. Chủ nghĩa Mác – Lênin kết hợp với phong trào công nhân và Phong trào yêu nước", "D. Cả A, B và C"],
        dap_an: "A",
        giai_thich: "Quy luật chung, phổ biến cho sự ra đời của Đảng Cộng sản là sự kết hợp giữa chủ nghĩa xã hội khoa học, tức chủ nghĩa Mác - Lênin với phong trào công nhân ."
    },
    {
        cau: "Câu 2: Nước cộng hoà dân chủ nhân dân đầu tiên ra đời ở châu Á là nước nào?",
        options: ["A. Việt Nam", "B. Trung Quốc", "C. Triều Tiên", "D. Mông Cổ"],
        dap_an: "D",
        giai_thich: "(Không có lời giải chi tiết) Đáp án được cung cấp trong nguồn trắc nghiệm là D."
    },
    {
        cau: "Câu 3: Liên bang CH XHCN Xô-viết (Liên Xô) được thành lập năm nào?",
        options: ["A. 1917", "B. 1918", "C. 1922", "D. 1924"],
        dap_an: "C",
        giai_thich: "Nhà nước Xô viết (nhà nước XHCN đầu tiên) ra đời năm 1917, nhưng Liên bang Xô viết được thành lập vào năm 1922 ."
    },
    {
        cau: "Câu 4: Điền từ còn thiếu vào chỗ trống: Giai cấp công nhân là cơ sở... của Đảng cộng sản, là nguồn bổ sung lực lượng của Đảng cộng sản?",
        options: ["A. Chính trị - xã hội", "B. Giai cấp", "C. Xã hội - giai cấp", "D. Chính trị"],
        dap_an: "C",
        giai_thich: "Giai cấp công nhân được xác định là cơ sở xã hội và nguồn bổ sung lực lượng quan trọng nhất của Đảng. Lựa chọn C ( Xã hội - giai cấp ) phù hợp với vai trò nền tảng này."
    },
    {
        cau: "Câu 5: Điền từ còn thiếu vào chỗ trống: Đảng cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp chủ nghĩa Mác - Lênin, với phong trào công nhân và... ở nước ta vào những năm cuối thập kỷ của thế kỷ XX?",
        options: ["A. Chủ nghĩa yêu nước", "B. Phong trào yêu nước", "C. Truyền thống yêu nước", "D. Truyền thống dân tộc"],
        dap_an: "B",
        giai_thich: "Đặc thù của Việt Nam là sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước của dân tộc."
    },
    {
        cau: "Câu 6: Điền từ còn thiếu vào chỗ trống: Đảng cộng sản là … chiến đấu, là bộ tham mưu của giai cấp công nhân, là biểu hiện tập trung lợi ích, nguyện vọng, phẩm chất, trí tuệ của giai cấp công nhân và của dân tộc?",
        options: ["A. Đội tiên phong", "B. Lực lượng", "C. Cơ sở", "D. Cơ quan chỉ huy"],
        dap_an: "A",
        giai_thich: "Đảng Cộng sản là Đội tiên phong (hay đội tiên phong chiến đấu) của giai cấp công nhân, đại diện tập trung cho lợi ích, nguyện vọng, phẩm chất, trí tuệ của giai cấp công nhân."
    },
    {
        cau: "Câu 7: Quy luật hình thành và phát triển của Đảng cộng sản Việt Nam?",
        options: ["A. Chủ nghĩa Mác, tư tưởng Hồ Chí Minh và phong trào công nhân", "B. Chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh và phong trào công nhân", "C. Chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước", "D. Chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh, phong trào công nhân và phong trào yêu nước."],
        dap_an: "C",
        giai_thich: "Quy luật phổ biến được vận dụng sáng tạo ở Việt Nam là sự kết hợp giữa Chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước ."
    },
    {
        cau: "Câu 8: Cách mạng xã hội chủ nghĩa theo nghĩa rộng là:",
        options: ["A. Là một cuộc cách mạng chính trị được kết thúc bằng việc giai cấp công nhân cùng với nhân dân lao động giành được chính quyền, thiết lập nhà nước chuyên chính vô sản.", "B. Là một cuộc cách mạng có nội dung chủ yếu về mặt kinh tế dưới sự lãnh đạo của giai cấp công nhân để xây dựng chủ nghĩa xã hội và chủ nghĩa cộng sản.", "C. Là quá trình cải biến một cách toàn diện trên tất cả các lĩnh vực của đời sống xã hội từ kinh tế, chính trị, văn hoá, tư tưởng…. để xây dựng chủ nghĩa xã hội và cuối cùng là chủ nghĩa cộng sản.", "D. Là cuộc cách mạng của giai cấp công nhân cùng với nhân dân lao động đánh đổ sự thống trị của giai cấp tư sản và lật đổ chủ nghĩa tư bản."],
        dap_an: "C",
        giai_thich: "Cách mạng xã hội chủ nghĩa theo nghĩa rộng bao gồm toàn bộ quá trình cải biến, xây dựng xã hội mới một cách toàn diện trên mọi lĩnh vực."
    },
    {
        cau: "Câu 9: Cách mạng xã hội chủ nghĩa theo nghĩa hẹp là gì?",
        options: ["A. Là một cuộc cách mạng chính trị được kết thúc bằng việc giai cấp công nhân cùng với nhân dân lao động giành được chính quyền, thiết lập nhà nước chuyên chính vô sản.", "B. Là một cuộc cách mạng có nội dung chủ yếu về mặt kinh tế dưới sự lãnh đạo của giai cấp công nhân để xây dựng chủ nghĩa xã hội và chủ nghĩa cộng sản.", "C. Là quá trình cải biến một cách toàn diện trên tất cả các lĩnh vực của đời sống xã hội từ kinh tế, chính trị, văn hoá, tư tưởng…. để xây dựng chủ nghĩa xã hội và cuối cùng là chủ nghĩa cộng sản.", "D. Là cuộc cáchá mạng của giai cấp công nhân cùng với nhân dân lao động đánh đổ sự thống trị của giai cấp tư sản và lật đổ chủ nghĩa tư bản."],
        dap_an: "A",
        giai_thich: "Cách mạng xã hội chủ nghĩa theo nghĩa hẹp là cuộc cách mạng chính trị nhằm lật đổ quyền thống trị của giai cấp bóc lột, giành chính quyền và thiết lập chuyên chính vô sản."
    },
    {
        cau: "Câu 10: Chủ tịch Hồ Chí Minh đã nêu ra con đường phát triển của cách mạng Việt Nam trong Chánh cương vắn tắt của Đảng ta là:",
        options: ["A. “Làm cách mạng dân tộc dân chủ nhân dân để đi thẳng tới chế độ cộng sản chủ nghĩa”.", "B. “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản”.", "C. “Làm thổ địa cách mạng và tư sản dân quyền cách mạng để đi tới xã hội cộng sản”.", "D. “Làm tư sản dân quyền và thổ địa cách mạng để đi thẳng tới xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa”."],
        dap_an: "B",
        giai_thich: "Nội dung trong Chánh cương vắn tắt của Đảng (1930) xác định con đường cách mạng là làm \"tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản \"."
    },
    {
        cau: "Câu 11: Tại sao cho rằng con đường cách mạng Việt Nam là quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là một tất yếu?",
        options: ["A. Đảng cộng sản Việt Nam đã có đường lối đúng đắn", "B. Do sự phát triển của lực lượng sản xuất", "C. Vì nó phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại", "D. Vì nó đáp ứng được nguyện vọng và mong ước của nhân dân ta"],
        dap_an: "C",
        giai_thich: "Quá độ bỏ qua chế độ tư bản chủ nghĩa là sự lựa chọn duy nhất đúng đắn, khoa học, phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại ."
    },
    {
        cau: "Câu 12: Cơ sở để xác định thời đại và phân chia thời đại là gì?",
        options: ["A. Hình thái kinh tế - xã hội và vị trí của một giai cấp đứng ở vị trí trung tâm", "B. Vị trí của một giai cấp đứng ở vị trí trung tâm", "C. Sự phát triển của lực lượng sản xuất và một quan hệ sản xuất phù hợp", "D. Cách mạng xã hội chủ nghĩa do giai cấp công nhân lãnh đạo thành công"],
        dap_an: "A",
        giai_thich: "Việc xác định và phân chia các thời đại lớn trong lịch sử xã hội loài người chủ yếu dựa trên hình thái kinh tế - xã hội và vị trí trung tâm của giai cấp nắm giữ vai trò lãnh đạo lịch sử (GCCN)."
    },
    {
        cau: "Câu 13: Thời đại ngày nay tồn tại mấy mâu thuẫn cơ bản?",
        options: ["A. Hai", "B. Ba", "C. Bốn", "D. Năm"],
        dap_an: "C",
        giai_thich: "Theo lý luận chủ nghĩa xã hội khoa học, thời đại hiện nay tồn tại bốn mâu thuẫn cơ bản (giữa vô sản và tư sản; giữa CNXH và CNTB; giữa các dân tộc bị áp bức và chủ nghĩa đế quốc; giữa các nước đế quốc)."
    },
    {
        cau: "Câu 14: Mâu thuẫn cơ bản nổi bật của thời đại hiện nay là:",
        options: ["A. Mâu thuẫn giữa chủ nghĩa xã hội và chủ nghĩa tư bản", "B. Giai cấp tư sản và giai cấp công nhân", "C. Các dân tộc thuộc địa và phụ thuộc với Chủ nghĩa đế quốc", "D. Mâu thuẫn giữa các nước tư bản chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Tính chất của thời đại hiện nay là thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trên phạm vi toàn thế giới , do đó, mâu thuẫn nổi bật nhất là cuộc đấu tranh gay gắt giữa chủ nghĩa xã hội và chủ nghĩa tư bản ."
    },
    {
        cau: "Câu 15: Theo Lênin, nội dung của thời đại hiện nay là gì?",
        options: ["A. Xoá bỏ chủ nghĩa tư bản và xây dựng chủ nghĩa xã hội.", "B. Xoá bỏ giai cấp tư sản và chế độ tư bản chủ nghĩa, thiết lập những cơ sở của xã hội mới là xã hội chủ nghĩa và cộng sản chủ nghĩa.", "C. Thiết lập những cơ sở của xã hội mới là xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa.", "D. Xác lập địa vị thống trị của giai cấp công nhân và nhân dân lao động."],
        dap_an: "B",
        giai_thich: "Nội dung của thời đại mới (thời đại quá độ lên CNXH) là lật đổ chế độ tư bản chủ nghĩa và thiết lập những cơ sở của xã hội mới là xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa ."
    },
    {
        cau: "Câu 16: Thời đại hiện nay có mấy giai đoạn chính?",
        options: ["A. Ba", "B. Bốn", "C. Năm", "D. Sáu"],
        dap_an: "A",
        giai_thich: "Lịch sử phát triển của chủ nghĩa xã hội khoa học thường được phân chia thành ba giai đoạn cơ bản: thời kỳ C. Mác và Ph. Ăngghen, thời kỳ V.I. Lênin, và thời kỳ sau V.I. Lênin đến nay."
    },
    {
        cau: "Câu 17: Ai là người đưa ra lí thuyết “Ba làn sóng” hay “Ba nền văn minh”?",
        options: ["A. Sáclơ – phuriê", "B. C. Mác", "C. Alvin – Toffơlơ", "D. Nich xon"],
        dap_an: "C",
        giai_thich: "(Không có lời giải chi tiết) Theo kiến thức chung, lý thuyết \"Ba làn sóng\" là của Alvin Toffơlê."
    },
    {
        cau: "Câu 18: Tính chất của thời đại ngày nay là:",
        options: ["A. Thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trên phạm vi toàn thế giới.", "B. Thời kỳ xây dựng những tiền đề kinh tế, chính trị, văn hoá, xã hội cho chủ nghĩa xã hội", "C. Diễn ra cuộc đấu tranh gay go, quyết liệt giữa chủ nghĩa xã hội và chủ nghĩa tư bản trên phạm vi toàn thế giới.", "D. Giai cấp công nhân và nhân dân lao động tiến hành đấu tranh giành chính quyền đi lên xây dựng chủ nghĩa xã hội."],
        dap_an: "A",
        giai_thich: "Tính chất cơ bản, xuyên suốt của thời đại hiện nay là thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trên phạm vi toàn thế giới."
    },
    {
        cau: "Câu 19: Nguyên nhân nào dẫn đến sự sụp đổ của CNXH ở Liên Xô và Đông Âu:",
        options: ["A. Quan niệm và vận dụng không đúng đắn về CNXH", "B. Những sai lầm của Đảng và của những người lãnh đạo cấp cao nhất Đảng Cộng sản Liên Xô.", "C. Sự chống phá của chủ nghĩa đế quốc và các thế lực thù địch bằng “Diễn biến hoà bình”", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Giáo trình chỉ ra sự sụp đổ là do nhiều tác động tiêu cực, phức tạp từ bên trong và bên ngoài. Các nước xã hội chủ nghĩa khủng hoảng là do sai lầm của các nước đó (A, B) và sự chống phá của chủ nghĩa đế quốc bằng chiến lược “diễn biến hòa bình” (C)."
    }
];

// --- DỮ LIỆU ĐỀ SỐ 12 ---
const de12 = [
    {
        cau: "Câu 1: Trong những mâu thuẫn cơ bản của thời đại hiện nay, mâu thuẫn nào là nổi bật, xuyên suốt thời đại mang tính toàn cầu?",
        options: ["A. Mâu thuẫn giữa chủ nghĩa xã hội và chủ nghĩa tư bản.", "B. Mâu thuẫn giữa tư bản và lao động.", "C. Mâu thuẫn giữa các dân tộc thuộc địa và phụ thuộc với chủ nghĩa đế quốc", "D. Mâu thuẫn giữa các nước tư bản với nhau."],
        dap_an: "A",
        giai_thich: "Mâu thuẫn nổi bật và xuyên suốt của thời đại hiện nay là cuộc đấu tranh gay gắt giữa hai hệ thống thế giới là chủ nghĩa xã hội và chủ nghĩa tư bản."
    },
    {
        cau: "Câu 2: Công nghiệp hoá là:",
        options: ["A. Quy luật bắt buộc đối mọi quốc gia quá độ lên CNXH", "B. Không phải là quy luật bắt buộc đối với mọi quốc gia quá độ lên CNXH.", "C. Quy luật bắt buộc đối với các quốc gia TBCN khi quá độ lên CNXH.", "D. Cả A và C."],
        dap_an: "D",
        giai_thich: "Trong quá trình xây dựng chủ nghĩa xã hội (CNXH), việc công nghiệp hóa được coi là một nhiệm vụ trọng tâm."
    },
    {
        cau: "Câu 3: Quan hệ giữa lợi ích dân tộc với lợi ích của giai cấp công nhân dưới chủ nghĩa xã hội:",
        options: ["A. Là mâu thuẫn", "B. Là thống nhất", "C. Là thống nhất về căn bản", "D. Đồng nhất với nhau"],
        dap_an: "C",
        giai_thich: "Lợi ích của giai cấp công nhân và lợi ích dân tộc có mối quan hệ gắn bó chặt chẽ... hai lợi ích này được coi là thống nhất về căn bản."
    },
    {
        cau: "Câu 4: Chọn một câu trả lời đúng nhất TBCN hiện đại là một giai đoạn phát triển mới của chủ nghĩa tư bản?",
        options: ["A. TBCN hiện đại là một giai đoạn phát triển mới của chủ nghĩa tư bản", "B. TBCN hiện đại đã khắc phục được mâu thuẫn cơ bản vốn có của nó", "C. TBCN hiện đại không khác gì TBCN trước đây", "D. Cả A, B và C đều sai"],
        dap_an: "A",
        giai_thich: "Chủ nghĩa tư bản hiện đại vẫn là sự phát triển liên tục của chủ nghĩa tư bản... Tuy nhiên, nó chưa khắc phục được mâu thuẫn cơ bản vốn có của nó."
    },
    {
        cau: "Câu 5: Dân chủ là gì?",
        options: ["A. Là quyền lực thuộc về nhân dân", "B. Là quyền của con người", "C. Là quyền tự do của mỗi người", "D. Là trật tự xã hội"],
        dap_an: "A",
        giai_thich: "Theo quan điểm của chủ nghĩa Mác - Lênin, dân chủ trước hết là một phương diện chính trị... dân chủ là quyền lực thuộc về nhân dân."
    },
    {
        cau: "Câu 6: Phạm trù dân chủ xuất hiện khi nào?",
        options: ["A. Ngay từ khi có xã hội loài người.", "B. Khi có nhà nước vô sản.", "C. Khi có nhà nước", "D. Cả A, B và C"],
        dap_an: "C",
        giai_thich: "Dân chủ là một phạm trù lịch sử, sự ra đời và phát triển của nó gắn liền với sự tồn tại của nhà nước."
    },
    {
        cau: "Câu 7: Dân chủ được xem xét dưới góc độ nào?",
        options: ["A. Phạm trù chính trị", "B. Phạm trù lịch sử", "C. Phạm trù văn hoá", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Dân chủ được xem xét dưới góc độ là: phạm trù lịch sử, phạm trù chính trị, và giá trị văn hóa."
    },
    {
        cau: "Câu 8: So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm khác biệt cơ bản nào?",
        options: ["A. Không còn mang tính giai cấp.", "B. Là nền dân chủ phi lịch sử.", "C. Là nền dân chủ thuần tuý.", "D. Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động."],
        dap_an: "D",
        giai_thich: "Điểm khác biệt cơ bản của dân chủ xã hội chủ nghĩa là nó là nền dân chủ của đại đa số nhân dân lao động... thực hiện quyền lực của giai cấp công nhân và nhân dân lao động."
    },
    {
        cau: "Câu 9: Điền từ còn thiếu vào chỗ trống: “Nước ta là nước dân chủ, nghĩa là nước nhà do nhân dân làm chủ. Nhân dân có quyền lợi làm chủ, thì phải có … làm tròn bổn phận công dân” (Hồ Chí Minh)",
        options: ["A. Trách nhiệm", "B. Nghĩa vụ", "C. Trình độ để", "D. Khả năng để"],
        dap_an: "B",
        giai_thich: "Trong tư tưởng Hồ Chí Minh, bên cạnh quyền lợi làm chủ, nhân dân phải có nghĩa vụ (bổn phận) làm tròn trách nhiệm công dân."
    },
    {
        cau: "Câu 10: Điền vào ô trống từ còn thiếu: “Quyền không bao giờ có thể ở một mức độ cao hơn chế độ … và sự phát triển văn hoá của xã hội do chế độ … đó quyết định” (Mác: Phê phán Cương lĩnh Gôta)",
        options: ["A. Chính trị", "B. Xã hội", "C. Kinh tế", "D. Nhà nước"],
        dap_an: "C",
        giai_thich: "Đây là luận điểm của C. Mác... Quyền (quyền chính trị, pháp luật) không bao giờ có thể ở một mức độ cao hơn chế độ kinh tế."
    },
    {
        cau: "Câu 11: Câu “Thực hành dân chủ là cái chìa khoá vạn năng có thể giải quyết mọi khó khăn” là của ai?",
        options: ["A. V. I. Lênin", "B. Mao Trạch Đông", "C. Hồ Chí Minh", "D. Lê Duẩn"],
        dap_an: "C",
        giai_thich: "Đây là câu nói của Chủ tịch Hồ Chí Minh, nhấn mạnh vai trò thực tiễn và tính phổ quát của việc thực hành dân chủ."
    },
    {
        cau: "Câu 12: Bản chất chính trị của nền dân chủ xã hội chủ nghĩa thể hiện như thế nào?",
        options: ["A. Là sự lãnh đạo của giai cấp công nhân thông qua đảng của nó đối với toàn xã hội...", "B. Là thực hiện quyền lực của giai cấp công nhân và nhân dân lao động đối với toàn xã hội.", "C. Là sự lãnh đạo của giai cấp công nhân thông qua chính đảng của nó để cải tạo xã hội cũ và xây dựng xã hội mới.", "D. Cả A, B và C"],
        dap_an: "D",
        giai_thich: "Bản chất chính trị của dân chủ XHCN là sự thống trị về chính trị của GCCN. Điều này bao hàm việc thực hiện quyền lực (B) dưới sự lãnh đạo của Đảng (A, C) nhằm xây dựng xã hội mới."
    },
    {
        cau: "Câu 13: Khái niệm “Hệ thống chính trị xã hội chủ nghĩa” do tổ chức nào sau đây nêu ra?",
        options: ["A. Đảng Cộng sản Liên Xô", "B. Đảng Cộng sản Trung Quốc", "C. Đảng Cộng sản Việt Nam", "D. Quốc tế cộng sản (Quốc tế III)"],
        dap_an: "A",
        giai_thich: "Khái niệm này được phát triển từ lý luận về \"hệ thống chuyên chính vô sản\" của V.I. Lênin. Đảng Cộng sản Liên Xô... là tổ chức đầu tiên phát triển và áp dụng những lý luận này."
    },
    {
        cau: "Câu 14: Theo Đảng ta cấu trúc cơ bản của hệ thống chính trị xã hội chủ nghĩa bao gồm:",
        options: ["A. Đảng cộng sản, nhà nước xã hội chủ nghĩa", "B. Đảng cộng sản Việt Nam, nhà nước xã hội chủ nghĩa, các tổ chức xã hội chính trị.", "C. Đảng cộng sản, nhà nước xã hội chủ nghĩa, hệ thống pháp luật", "D. Cả ba đều đúng"],
        dap_an: "B",
        giai_thich: "Cấu trúc cơ bản của hệ thống chính trị Việt Nam bao gồm Đảng Cộng sản Việt Nam (lãnh đạo), Nhà nước xã hội chủ nghĩa (quản lý), và các tổ chức chính trị - xã hội."
    },
    {
        cau: "Câu 15: Về bản chất “Hệ thống chính trị xã hội chủ nghĩa” và “hệ thống chuyên chính vô sản” là thống nhất?",
        options: ["A. Đúng", "B. Sai"],
        dap_an: "A",
        giai_thich: "Đúng. Hệ thống chính trị xã hội chủ nghĩa là hình thức tổ chức để thực hiện chuyên chính vô sản."
    },
    {
        cau: "Câu 16: Đổi mới hệ thống chính trị ở nước ta hiện nay là:",
        options: ["A. Đổi mới mục tiêu, con đường xã hội chủ nghĩa", "B. Đổi mới nội dung, phương thức hoạt động, tổ chức cán bộ và quan hệ giữa các tổ chức trong hệ thống chính trị", "C. Thay đổi hệ thống tư duy lý luận", "D. Đổi mới tư duy"],
        dap_an: "B",
        giai_thich: "Đảng Cộng sản Việt Nam xác định đổi mới hệ thống chính trị là việc đổi mới nội dung, phương thức hoạt động... mà không thay đổi mục tiêu, con đường xã hội chủ nghĩa."
    },
    {
        cau: "Câu 17: Điền từ còn thiếu vào chỗ trống: Nhà nước xã hội chủ nghĩa vừa có bản chất giai cấp công nhân, vừa có tính nhân dân rộng rãi và tính . . . sâu sắc.",
        options: ["A. Giai cấp", "B. Nhân đạo", "C. Dân tộc", "D. Cộng đồng"],
        dap_an: "C",
        giai_thich: "Bản chất của Nhà nước xã hội chủ nghĩa... được xác định bao gồm ba yếu tố thống nhất: bản chất giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc."
    },
    {
        cau: "Câu 18: Tổ chức nào đóng vai trò trụ cột trong hệ thống chính trị ở nước ta hiện nay?",
        options: ["A. Đảng cộng sản Việt Nam", "B. Nhà nước xã hội chủ nghĩa", "C. Mặt trận Tổ quốc", "D. Các đoàn thể nhân dân"],
        dap_an: "A",
        giai_thich: "Đảng Cộng sản Việt Nam giữ vai trò lãnh đạo duy nhất, là nhân tố quan trọng hàng đầu trong toàn bộ hệ thống chính trị."
    },
    {
        cau: "Câu 19: Bản chất của nhà nước xã hội chủ nghĩa là gì?",
        options: ["A. Mang bản chất của giai cấp công nhân.", "B. Mang bản chất của đa số nhân dân lao động.", "C. Mang bản chất của giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc.", "D. Vừa mang bản chất của giai cấp công nhân, vừa mang bản chất của nhân dân lao động và tính dân tộc sâu sắc."],
        dap_an: "C",
        giai_thich: "Bản chất nhà nước XHCN ở Việt Nam được khái quát ở ba phương diện thống nhất: mang bản chất giai cấp công nhân, thể hiện tính nhân dân rộng rãi, và mang tính dân tộc sâu sắc."
    },
    {
        cau: "Câu 20: Nhà nước pháp quyền xã hội chủ nghĩa quản lý mọi mặt của đời sống xã hội chủ yếu bằng gì?",
        options: ["A. Đường lối, chính sách", "B. Hiến pháp, pháp luật", "C. Tuyên truyền, giáo dục", "D. Cả A, B và C"],
        dap_an: "B",
        giai_thich: "Nhà nước pháp quyền xã hội chủ nghĩa là mô hình nhà nước mà ở đó, mọi hoạt động đều được quản lý, tổ chức và điều hành chủ yếu bằng Hiến pháp và pháp luật."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 13 ---
const de13 = [
    {
        cau: "Câu 1: Nhà nước XHCN ở Việt Nam hiện nay ra đời từ khi nào?",
        options: ["A. 1930", "B. 1945", "C. 1954", "D. 1975"],
        dap_an: "B",
        giai_thich: "Nhà nước Việt Nam Dân chủ Cộng hòa, tiền thân của Nhà nước XHCN, được thành lập sau Cách mạng Tháng Tám năm 1945."
    },
    {
        cau: "Câu 2: Những đặc trưng cơ bản của chủ nghĩa xã hội mà nhân dân ta đang xây dựng hiện nay được thông qua tại?",
        options: ["A. Đại hội VI", "B. Đại hội VII", "C. Đại hội VIII", "D. Đại hội IX"],
        dap_an: "B",
        giai_thich: "Các đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam được thông qua... tại Đại hội đại biểu toàn quốc lần thứ VII của Đảng (năm 1991)."
    },
    {
        cau: "Câu 3: Câu “Giữ vững và tăng cường bản chất giai cấp công nhân của Đảng. Đây là nhiệm vụ có ý nghĩa quan trọng hàng đầu đối với Đảng ta”. Được ghi ở Văn kiện nào Đại hội nào của Đảng?",
        options: ["A. Đại hội VI", "B. Đại hội VII", "C. Đại hội VIII", "D. Đại hội IX"],
        dap_an: "C",
        giai_thich: "Tăng cường và giữ vững bản chất giai cấp công nhân của Đảng là một nhiệm vụ chính trị quan trọng, được nhấn mạnh trong văn kiện Đại hội VIII."
    },
    {
        cau: "Câu 4: Khái niệm “Chuyên chính của giai cấp công nhân” được sử dụng lần đầu tiên trong tác phẩm nào?",
        options: ["A. Hệ tư tưởng Đức", "B. Những nguyên lý của CNCS", "C. Tuyên ngôn của Đảng cộng sản", "D. Nội chiến ở Pháp"],
        dap_an: "C",
        giai_thich: "Tuyên ngôn của Đảng Cộng sản (1848) của C. Mác và Ph. Ăngghen là tác phẩm kinh điển đầu tiên phác thảo những nội dung chủ yếu của chủ nghĩa xã hội khoa học."
    },
    {
        cau: "Câu 5: Trong xã hội có giai cấp, cơ cấu nào có vị trí quyết định nhất, chi phối các loại hình cơ cấu xã hội khác?",
        options: ["A. Cơ cấu xã hội - nghề nghiệp", "B. Cơ cấu xã hội - dân số", "C. Cơ cấu xã hội - giai cấp", "D. Cơ cấu xã hội - dân tộc"],
        dap_an: "C",
        giai_thich: "Trong hệ thống cơ cấu xã hội, cơ cấu xã hội - giai cấp có vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác."
    },
    {
        cau: "Câu 6: Sự biến đổi của cơ cấu xã hội – giai cấp gắn liền và được quy định bởi sự biến động của cơ cấu nào?",
        options: ["A. Cơ cấu xã hội - dân số", "B. Cơ cấu xã hội - kinh tế", "C. Cơ cấu xã hội - dân tộc", "D. Cơ cấu xã hội - dân cư"],
        dap_an: "B",
        giai_thich: "Cơ cấu xã hội - giai cấp bị chi phối bởi những biến đổi của cơ cấu kinh tế trong thời kỳ quá độ."
    },
    {
        cau: "Câu 7: Trong quá trình xây dựng chủ nghĩa xã hội, liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức dưới góc độ nào giữ vai trò quyết định?",
        options: ["A. Chính trị", "B. Kinh tế", "C. Văn hoá", "D. Tư tưởng"],
        dap_an: "B",
        giai_thich: "Trong nội dung liên minh giai cấp, nội dung kinh tế là nội dung cơ bản, quyết định nhất."
    },
    {
        cau: "Câu 8: Yếu tố nào quyết định sự liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức?",
        options: ["A. Do giai cấp công nhân mong muốn", "B. Do có cùng một kẻ thù là giai cấp tư sản", "C. Do có những lợi ích cơ bản thống nhất với nhau", "D. Do mục tiêu về chính trị của giai cấp công nhân"],
        dap_an: "C",
        giai_thich: "Liên minh giai cấp xuất phát từ sự tương đồng về nhu cầu và lợi ích cơ bản thống nhất giữa giai cấp công nhân, nông dân và tầng lớp lao động khác."
    },
    {
        cau: "Câu 9: Xu hướng phát triển cơ cấu xã hội – giai cấp ở Việt Nam trong thời kỳ quá độ mang tính đa dạng và thống nhất chủ yếu do yếu tố nào quyết định?",
        options: ["A. Do trình độ phát triển không đồng đều", "B. Do nền kinh tế nhiều thành phần", "C. Do sự mong muốn của giai cấp công nhân", "D. Cả ba đều đúng."],
        dap_an: "B",
        giai_thich: "Sự đa dạng, phức tạp của cơ cấu xã hội - giai cấp ở Việt Nam... được quy định bởi sự biến đổi của cơ cấu kinh tế, đặc biệt là sự tồn tại của kinh tế nhiều thành phần."
    },
    {
        cau: "Câu 10: Nội dung nào quan trọng nhất trong các nội dung Liên minh công-nông-trí thức?",
        options: ["A. Chính trị", "B. Kinh tế", "C. Tư tưởng", "D. Văn hoá- xã hội"],
        dap_an: "B",
        giai_thich: "Nội dung kinh tế của liên minh là nội dung cơ bản quyết định, là nền tảng vật chất – kỹ thuật."
    },
    {
        cau: "Câu 11: Liên minh giữa giai cấp công nhân với giai cấp nông dân và tầng lớp trí thức là do:",
        options: ["A. Do mong muốn của công nhân.", "B. Yêu cầu của nông dân", "C. Yêu cầu của trí thức", "D. Do đòi hỏi khách quan của cả công nhân, nông dân và trí thức."],
        dap_an: "D",
        giai_thich: "Liên minh là một đòi hỏi khách quan của cách mạng xã hội chủ nghĩa, xuất phát từ lợi ích chung."
    },
    {
        cau: "Câu 12: Câu “Vô sản tất cả các nước và các dân tộc bị áp bức, đoàn kết lại” là của ai?",
        options: ["A. C. Mác", "B. C. Mác & Ph. Ăng ghen", "C. V. I Lênin", "D. Hồ Chí Minh"],
        dap_an: "C",
        giai_thich: "Đây là sự bổ sung và phát triển sáng tạo của V.I. Lênin đối với khẩu hiệu của C. Mác và Ph. Ăngghen."
    },
    {
        cau: "Câu 13: Nội dung cương lĩnh dân tộc của chủ nghĩa Mác - Lênin là:",
        options: ["A. Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc lại.", "B. Các dân tộc đoàn kết, bình đẳng và liên hiệp công nhân tất cả các dân tộc lại.", "C. Các dân tộc có quyền tự quyết, các dân tộc có quyền bình đẳng, liên hiệp công nhân tất cả các dân tộc lại.", "D. Các dân tộc hoàn toàn bình đẳng, tự quyết và liên hiệp công nhân các nước."],
        dap_an: "A",
        giai_thich: "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin bao gồm ba nội dung cốt lõi: Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, và liên hiệp công nhân tất cả các dân tộc lại."
    },
    {
        cau: "Câu 14: Tác phẩm: “Về quyền dân tộc tự quyết” là của ai?",
        options: ["A. C. Mác", "B. C. Mác & Ph. Ăng ghen", "C. V. I Lênin", "D. Stalin"],
        dap_an: "C",
        giai_thich: "Tác phẩm \"Về quyền dân tộc tự quyết\" là một trong những tác phẩm quan trọng của V.I. Lênin."
    },
    {
        cau: "Câu 15: Các thế lực thù địch sử dụng chiến lược “diễn biến hoá bình” chống phá sự nghiệp xây dựng Tổ quốc xã hội chủ nghĩa của nhân dân ta trên phương diện nào?",
        options: ["A. Kinh tế, chính trị - xã hội", "B. Văn hoá, tư tưởng", "C. Đạo đức, lối sống...", "D. Cả A, B và C đều đúng"],
        dap_an: "D",
        giai_thich: "Chiến lược \"diễn biến hòa bình\" là một chiến lược toàn diện, chống phá sự nghiệp xây dựng CNXH trên mọi phương diện."
    },
    {
        cau: "Câu 16: Điền từ còn thiếu vào chỗ trống: Quyền dân tộc tự quyết là quyền làm chủ của mỗi dân tộc đối với vận mệnh dân tộc mình, quyền tự quyết định chế độ chính trị – xã hội và... phát triển của dân tộc mình.",
        options: ["A. Cách thức", "B. Con đường", "C. Mục tiêu", "D. Hình thức"],
        dap_an: "B",
        giai_thich: "Quyền dân tộc tự quyết bao gồm quyền tự quyết định chế độ chính trị – xã hội và con đường phát triển của dân tộc mình."
    },
    {
        cau: "Câu 17: Điền từ còn thiếu vào chỗ trống: Lênin viết: “Với sự giúp đỡ của giai cấp vô sản các nước tiên tiến, các nước lạc hậu có thể tiến tới chế độ Xô viết, và qua những giai đoạn phát triển nhất định, tiến tới chủ nghĩa cộng sản, không phải trải qua... phát triển tư bản chủ nghĩa”.",
        options: ["A. Chế độ", "B. Giai đoạn", "C. Quá trình", "D. Hình thức"],
        dap_an: "B",
        giai_thich: "Luận điểm này của Lênin khẳng định khả năng rút ngắn quá trình phát triển... tức là không phải trải qua đầy đủ giai đoạn phát triển của chủ nghĩa tư bản."
    },
    {
        cau: "Câu 18: Trong các nội dung của quyền dân tộc tự quyết thì nội dung nào được coi là cơ bản nhất, tiên quyết nhất?",
        options: ["A. Tự quyết về chính trị", "B. Tự quyết về kinh tế", "C. Tự quyết về văn hoá", "D. Tự quyết về lãnh thổ"],
        dap_an: "A",
        giai_thich: "Tự quyết về chính trị (quyền tách ra thành lập quốc gia độc lập hoặc tự nguyện liên hiệp) là quyền cơ bản nhất, tiên quyết nhất."
    },
    {
        cau: "Câu 19: Trong một quốc gia đa tộc người thì vấn đề gì cần giải quyết được coi là có ý nghĩa cơ bản nhất để thực hiện quyền bình đẳng giữa các dân tộc?",
        options: ["A. Ban hành hệ thống hiến pháp và pháp luật về quyền bình đẳng giữa các dân tộc", "B. Chống tư tưởng phân biệt chủng tộc, kì thị và chia rẽ dân tộc", "C. Nâng cao trình độ dân trí, văn hoá cho đồng bào", "D. Xóa bỏ dần sự chênh lệch về mọi mặt giữa các dân tộc do lịch sử để lại"],
        dap_an: "D",
        giai_thich: "Để thực hiện bình đẳng dân tộc thực sự, cần phải xóa bỏ dần sự chênh lệch về mọi mặt (kinh tế, văn hóa, xã hội) giữa các dân tộc do lịch sử để lại."
    },
    {
        cau: "Câu 20: Nước ta có bao nhiêu dân tộc cùng nhau chung sống?",
        options: ["A. 49", "B. 52", "C. 54", "D. 56"],
        dap_an: "C",
        giai_thich: "Việt Nam là một quốc gia đa dân tộc với 54 dân tộc cùng nhau chung sống."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 14 ---
const de14 = [
    {
        cau: "Câu 1: Nguyên nhân chủ yếu của những hạn chế của chủ nghĩa xã hội không tưởng là?",
        options: ["A. Do trình độ nhận thức của những nhà tư tưởng", "B. Do khoa học chưa phát triển", "C. Do những điều kiện lịch sử khách quan quy định", "D. Do lực lượng sản xuất chưa phát triển"],
        dap_an: "C",
        giai_thich: "Hạn chế của chủ nghĩa xã hội không tưởng chủ yếu là do những điều kiện lịch sử khách quan quy định."
    },
    {
        cau: "Câu 2: Nội dung cơ bản nhất mà nhờ đó chủ nghĩa xã hội từ không tưởng trở thành khoa học là gì?",
        options: ["A. Lên án mạnh mẽ chủ nghĩa tư bản", "B. Phản ánh đúng khát vọng của nhân dân lao động bị áp bức", "C. Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu CNTB, xây dựng CNXH", "D. Chỉ ra sự cần thiết phải thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội"],
        dap_an: "C",
        giai_thich: "Yếu tố làm cho chủ nghĩa xã hội trở thành khoa học là sự luận chứng về sứ mệnh lịch sử của giai cấp công nhân."
    },
    {
        cau: "Câu 3: Ph. Ăngghen đã đánh giá: “Hai phát hiện vĩ đại này đã đưa chủ nghĩa xã hội trở thành một khoa học”. Hai phát kiến đó là gì?",
        options: ["A. Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử", "B. Sứ mệnh lịch sử của giai cấp công nhân – Học thuyết giá trị thặng dư", "C. Học thuyết giá trị thặng dư - Chủ nghĩa duy vật lịch sử", "D. Sứ mệnh lịch sử của giai cấp công nhân - Chủ nghĩa duy vật lịch sử"],
        dap_an: "C",
        giai_thich: "Hai phát kiến vĩ đại của C. Mác và Ph. Ăngghen là Chủ nghĩa duy vật lịch sử và Học thuyết về giá trị thặng dư."
    },
    {
        cau: "Câu 4: Vì sao chủ nghĩa xã hội khoa học theo nghĩa rộng là chủ nghĩa Mác - Lênin?",
        options: ["A. Vì chủ nghĩa xã hội khoa học đã phác thảo ra mô hình chủ nghĩa xã hội và chủ nghĩa cộng sản", "B. Vì chủ nghĩa xã hội khoa học đã luận chứng về sứ mệnh lịch sử của giai cấp công nhân hiện đại", "C. Vì chủ nghĩa xã hội khoa học dựa vào triết học, kinh tế chính trị để lý giải tính tất yếu lịch sử của Cách mạng xã hội chủ nghĩa..."],
        dap_an: "C",
        giai_thich: "CNXHKH là một bộ phận cấu thành trong chủ nghĩa Mác - Lênin... Nó sử dụng nền tảng của Triết học Mác – Lênin và Kinh tế chính trị Mác – Lênin để lý giải tính tất yếu lịch sử."
    },
    {
        cau: "Câu 5: Những nhà tư tưởng tiêu biểu của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX?",
        options: ["A. Grắccơ Babớp, Xanh Ximông, SáLơ Phuriê", "B. Xanh Ximông, SáLơ Phuriê, G. Mably", "C. Xanh Ximông, SáLơ Phuriê, Rôbớt Ôoen", "D. Xanh Ximông, Giăng Mêliê, Rôbớt Ôoen"],
        dap_an: "C",
        giai_thich: "Ba nhà tư tưởng tiêu biểu nhất của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX là Xanh Ximông (Pháp), S. Phuriê (Pháp), và R. Ôen (Anh)."
    },
    {
        cau: "Câu 6: Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        options: ["A. Hệ tư tưởng Đức", "B. Tình cảnh giai cấp lao động ở Anh", "C. Tuyên ngôn của Đảng cộng sản", "D. Những nguyên lý của chủ nghĩa cộng sản"],
        dap_an: "C",
        giai_thich: "Tác phẩm \"Tuyên ngôn của Đảng Cộng sản\" (1848) là văn kiện chính trị đầu tiên trình bày một cách có hệ thống lý luận của chủ nghĩa xã hội khoa học."
    },
    {
        cau: "Câu 7: Nhà tư tưởng xã hội chủ nghĩa không tưởng nào đã nói đến vấn đề giai cấp và xung đột giai cấp?",
        options: ["A. Xanh Ximông", "B. SáLơ Phuriê", "C. Rôbớt Ôoen", "D. Grắccơ Babớp"],
        dap_an: "A",
        giai_thich: "Trong số các nhà không tưởng phê phán, Xanh Ximông là người đã nhận thấy và đề cập đến vấn đề \"giai cấp\"."
    },
    {
        cau: "Câu 8: Nhà tư tưởng xã hội chủ nghĩa nào đã tố cáo quá trình tích luỹ tư bản chủ nghĩa bằng hình ảnh “cừu ăn thịt người”?",
        options: ["A. Tômát Morơ", "B. SáLơ Phuriê", "C. Rôbớt Ôoen", "D. Grắccơ Babớp"],
        dap_an: "A",
        giai_thich: "Tômát Morơ, trong tác phẩm Không tưởng (Utopia), đã sử dụng hình ảnh \"cừu ăn thịt người\" để tố cáo quá trình rào đất cướp ruộng."
    },
    {
        cau: "Câu 9: Ai đã nêu ra tư tưởng: trình độ giải phóng xã hội được đo bằng trình độ giải phóng phụ nữ?",
        options: ["A. Xanh Ximông", "B. SáLơ Phuriê", "C. Grắccơ Babớp", "D. Rôbớt Ôoen"],
        dap_an: "B",
        giai_thich: "Sáclơ Phuriê là người đã đưa ra tư tưởng tiến bộ này, khẳng định mối liên hệ giữa tiến bộ xã hội và địa vị của người phụ nữ."
    },
    {
        cau: "Câu 10: Nhà tư tưởng xã hội chủ nghĩa nào đã tiến hành thực nghiệm xã hội cộng sản trong lòng xã hội tư bản?",
        options: ["A. Xanh Ximông", "B. SáLơ Phuriê", "C. Grắccơ Babớp", "D. Rôbớt Ôoen"],
        dap_an: "D",
        giai_thich: "Rôbớt Ôoen là nhà tư tưởng không tưởng người Anh đã tiến hành các thực nghiệm xã hội cộng sản."
    },
    {
        cau: "Câu 11: Tác phẩm “Tuyên ngôn của những người bình dân” là của ai?",
        options: ["A. Tomát Morơ", "B. Tômađô Campanenla", "C. Giắccơ Babớp", "D. SáLơ Phuriê"],
        dap_an: "C",
        giai_thich: "Tác phẩm “Tuyên ngôn của những người bình dân” là của Giắccơ Babớp."
    },
    {
        cau: "Câu 12: Ai được coi là người mở đầu các trào lưu xã hội chủ nghĩa và cộng sản chủ nghĩa thời cận đại?",
        options: ["A. Tômađô Campanenla", "B. Tômát Morơ", "C. Arítxtốt", "D. Platôn"],
        dap_an: "B",
        giai_thich: "Tômát Morơ (với tác phẩm Utopia - 1516) được coi là người mở đầu cho các trào lưu xã hội chủ nghĩa không tưởng."
    },
    {
        cau: "Câu 13: Tư tưởng về “Giang sơn ngàn năm của Chúa” xuất hiện ở thời đại nào?",
        options: ["A. Công xã nguyên thuỷ", "B. Thời cổ đại", "C. Thời cận đại", "D. Thời phục hưng"],
        dap_an: "D",
        giai_thich: "Tư tưởng về một \"giang sơn thiên đường\"... phổ biến trong thời kỳ Thời phục hưng và cận đại."
    },
    {
        cau: "Câu 14: Phát hiện nào sau đây của C. Mác và Ph. Ăngghen?",
        options: ["A. Chủ nghĩa duy vật lịch sử", "B. Học thuyết giá trị thặng dư", "C. Sứ mệnh lịch sử của giai cấp công nhân", "D. Chủ nghĩa duy vật lịch sử, học thuyết giá trị thặng dư, sứ mệnh lịch sử của giai cấp công nhân"],
        dap_an: "D",
        giai_thich: "C. Mác và Ph. Ăngghen có ba phát kiến vĩ đại: Chủ nghĩa duy vật lịch sử, Học thuyết giá trị thặng dư, và luận chứng về Sứ mệnh lịch sử của giai cấp công nhân."
    },
    {
        cau: "Câu 15: Chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư đã được C. Mác phát triển và trình bày một cách có hệ thống trong tác phẩm nào?",
        options: ["A. Hệ tư tưởng Đức", "B. Tình cảnh của giai cấp lao động ở Anh", "C. Bộ Tư bản", "D. Những nguyên lý của chủ nghĩa cộng sản"],
        dap_an: "C",
        giai_thich: "Học thuyết giá trị thặng dư... là giá trị cốt lõi của tác phẩm Bộ Tư bản."
    },
    {
        cau: "Câu 16: Cùng với sự tiến bộ của khoa học công nghệ, giai cấp công nhân có xu hướng “trí thức hóa”... làm bản chất giai cấp công nhân trong chủ nghĩa tư bản thay đổi như thế nào?",
        options: ["A. Không làm thay đổi bản chất giai cấp công nhân", "B. Có làm thay đổi bản chất giai cấp công nhân", "C. Hoàn toàn thay đổi bản chất giai cấp công nhân", "D. Thay đổi chút ít bản chất giai cấp công nhân"],
        dap_an: "A",
        giai_thich: "Mặc dù GCCN có xu hướng \"trí tuệ hóa\"... sự thay đổi này không làm thay đổi bản chất giai cấp công nhân."
    },
    {
        cau: "Câu 17: Câu nói: “Điểm chủ yếu trong học thuyết của Mác là ở chỗ nó làm sáng tỏ vai trò lịch sử của giai cấp vô sản là người xây dựng chủ nghĩa xã hội\" là của ai?",
        options: ["A. Ph. Ăng ghen", "B. V.I. Lênin", "C. Hồ Chí Minh", "D. Stalin"],
        dap_an: "B",
        giai_thich: "Câu nói này là của V.I. Lênin, khẳng định vai trò trung tâm của giai cấp vô sản (GCCN) trong học thuyết Mác."
    },
    {
        cau: "Câu 18: Do sự phát triển của sản xuất và văn minh, đời sống công nhân ở các nước tư bản chủ nghĩa phát triển đã thay đổi ra sao?",
        options: ["A. Phần đông họ vẫn là những người vô sản trần trụi với hai bàn tay trắng", "B. Toàn bộ họ vẫn là những người vô sản trần trụi với hai bàn tay trắng", "C. Phần đông họ không còn là những người vô sản trần trụi với hai bàn tay trắng", "D. Toàn bộ họ vẫn là những người vô sản không có thay đổi gì..."],
        dap_an: "C",
        giai_thich: "Nhờ sự điều chỉnh của chủ nghĩa tư bản, một bộ phận công nhân đã được cải thiện mức sống... khiến phần đông họ không còn là những người vô sản trần trụi nữa."
    },
    {
        cau: "Câu 19: Hiện nay, có một số công nhân có cổ phần ở doanh nghiệp, sự thay đổi này dẫn tới thực tế gì ở các nước tư bản chủ nghĩa?",
        options: ["A. Phần nhỏ họ cũng là người chủ doanh nghiệp", "B. Họ đã thực sự trở thành chủ doanh nghiệp", "C. Họ hoàn toàn không có tư cách gì với nghĩa là chủ doanh nghiệp", "D. Đa phần họ là người chủ doanh nghiệp"],
        dap_an: "C",
        giai_thich: "Công nhân có cổ phần chỉ là hình thức tham gia sở hữu... về bản chất, họ hoàn toàn không có tư cách là chủ doanh nghiệp."
    },
    {
        cau: "Câu 20: Một số phần tử cơ hội, xét lại đang phủ nhận thuyết Mác – Lênin về sứ mệnh lịch sử của giai cấp công nhân, họ nhận định giai cấp công nhân ngày nay thế nào?",
        options: ["A. Đã “teo đi”, đã “tan biến” vào giai tầng xã hội khác", "B. Đã “phình lên”, đã “kết tinh” thành giai cấp công nhân hùng mạnh", "C. Đã phát triển để trở thành giai cấp thống trị", "D. Đã lụi tàn và trở thành giai cấp bị trị khốc liệt hơn"],
        dap_an: "A",
        giai_thich: "Các thế lực xét lại thường tuyên truyền rằng GCCN... đã “teo đi”, không còn là lực lượng cách mạng nữa."
    },
    {
        cau: "Câu 21: Cuộc bãi công của 600 thợ nhuộm ở Chợ Lớn năm 1922, Nguyễn Ái Quốc nhận định như thế nào?",
        options: ["A. Đó mới chỉ là “do bản năng tự vệ”", "B. Được giác ngộ chủ nghĩa Mác – Lênin", "C. Đó là sự tự giác của ý thức chính trị", "D. Được tác động bởi Quốc tế cộng sản..."],
        dap_an: "A",
        giai_thich: "Theo tư tưởng Hồ Chí Minh... những phong trào đấu tranh ban đầu của công nhân Việt Nam... Nguyễn Ái Quốc nhận định đó mới chỉ là \"do bản năng tự vệ\"."
    },
    {
        cau: "Câu 22: Theo Lênin, nội dung của thời đại hiện nay là gì?",
        options: ["A. Xoá bỏ chủ nghĩa tư bản và xây dựng chủ nghĩa xã hội", "B. Xoá bỏ giai cấp tư sản và chế độ tư bản chủ nghĩa, thiết lập những cơ sở của xã hội mới là xã hội chủ nghĩa và cộng sản chủ nghĩa", "C. Thiết lập những cơ sở của xã hội mới...", "D. Xác lập địa vị thống trị của giai cấp công nhân..."],
        dap_an: "B",
        giai_thich: "V.I. Lênin xác định nội dung của thời đại mới là xoá bỏ giai cấp tư sản và chế độ tư bản chủ nghĩa, thiết lập những cơ sở của xã hội mới là xã hội XHCN và cộng sản chủ nghĩa."
    },
    {
        cau: "Câu 23: Sự sụp đổ của chế độ chủ nghĩa xã hội ở Liên Xô và động Âu đã làm cho thời đại ngày nay thay đổi như thế nào?",
        options: ["A. Tính chất và nội dung của thời đại hiện nay có thay đổi", "B. Tính chất và nội dung của thời đại hiện nay không thay đổi", "C. Tính chất của thời đại hiện nay có thay đổi", "D. Nội dung của thời đại hiện nay có thay đổi"],
        dap_an: "B",
        giai_thich: "Sự sụp đổ này... làm cho phong trào XHCN thoái trào tạm thời, nhưng tính chất và nội dung cơ bản của thời đại... không thay đổi."
    },
    {
        cau: "Câu 24: Trong những mâu thuẫn cơ bản của thời đại hiện nay, mâu thuẫn nào là nổi bật, xuyên suốt thời đại mang tính toàn cầu?",
        options: ["A. Mâu thuẫn giữa chủ nghĩa xã hội và chủ nghĩa tư bản", "B. Mâu thuẫn giữa tư bản và lao động", "C. Mâu thuẫn giữa các dân tộc thuộc địa...", "D. Mâu thuẫn giữa các nước tư bản với nhau"],
        dap_an: "A",
        giai_thich: "Tính chất của thời đại hiện nay là quá độ từ CNTB lên CNXH, do đó, mâu thuẫn cơ bản, nổi bật, xuyên suốt... là mâu thuẫn giữa chủ nghĩa xã hội và chủ nghĩa tư bản."
    },
    {
        cau: "Câu 25: Đặc trưng cơ bản nhất của giai cấp công nhân nói chung là gì?",
        options: ["A. Không có tư liệu sản xuất, phải bán sức lao động", "B. Họ lao động trong nền công nghiệp...", "C. Bị giai cấp tư sản bóc lột", "D. Thỏa hiệp với giai cấp tư sản"],
        dap_an: "A",
        giai_thich: "Đặc trưng cơ bản nhất định vị GCCN trong chế độ TBCN (gọi là vô sản) là không có tư liệu sản xuất và phải bán sức lao động."
    },
    {
        cau: "Câu 26: Hiện nay giai cấp công nhân bán sức lao động chân tay và lao động trí óc... do đó họ bị bóc lột giá trị thặng dư như thế nào?",
        options: ["A. Bị bóc lột giá trị thặng dư theo chiều rộng", "B. Bị bóc lột giá trị thặng dư theo chiều ngang", "C. Bị bóc lột giá trị thặng dư theo chiều cao", "D. Bị bóc lột giá trị thặng dư theo chiều sâu"],
        dap_an: "D",
        giai_thich: "Trong điều kiện hiện đại hóa và kinh tế tri thức, chủ nghĩa tư bản tăng cường bóc lột bằng cách tăng năng suất... được gọi là bóc lột giá trị thặng dư theo chiều sâu."
    },
    {
        cau: "Câu 27: Cùng với sự phát triển của khoa học và công nghệ ngày càng hiện đại, giai cấp công nhân thay đổi như thế nào?",
        options: ["A. Giảm về số lượng và nâng cao về chất lượng", "B. Tăng về số lượng và nâng cao về chất lượng", "C. Giảm về số lượng và có trình độ sản xuất ngày càng cao", "D. Tăng về số lượng và nâng cao nhận thức"],
        dap_an: "B",
        giai_thich: "Sự phát triển của công nghiệp hiện đại và kinh tế tri thức làm cho GCCN ngày nay tăng về số lượng và nâng cao về chất lượng (trí tuệ hóa)."
    },
    {
        cau: "Câu 28: Xét về phương thức lao động, phương thức sản xuất, giai cấp công nhân mang thuộc tính cơ bản nào?",
        options: ["A. Tăng về số lượng và nâng cao về chất lượng", "B. Là giai cấp tạo ra của cải vật chất làm giàu cho xã hội", "C. Là giai cấp trực tiếp vận hành máy móc có tính chất công nghiệp ngày càng hiện đại", "D. Có trình độ nhận thức cao"],
        dap_an: "C",
        giai_thich: "Về phương thức sản xuất, đặc điểm nổi bật của GCCN là họ là giai cấp trực tiếp vận hành các công cụ lao động có tính chất công nghiệp ngày càng hiện đại (máy móc)."
    },
    {
        cau: "Câu 29: C. Mác và Ph.Ăngghen đã dựa vào những phát kiến nào để xây dựng luận chứng về sứ mệnh lịch sử của giai cấp công nhân?",
        options: ["A. Chủ nghĩa xã hội không tưởng – phê phán", "B. Chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư", "C. Triết học cổ điển Đức và kinh tế chính trị học cổ điển Anh", "D. Chủ nghĩa xã hội khoa học"],
        dap_an: "B",
        giai_thich: "C. Mác và Ph. Ăngghen đã xây dựng luận chứng về sứ mệnh lịch sử của GCCN dựa trên nền tảng khoa học là Chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư."
    },
    {
        cau: "Câu 30: Thuộc tính cơ bản nào nói lên một trong những đặc trưng cơ bản dưới chế độ tư bản chủ nghĩa giai cấp công nhân còn gọi là giai cấp vô sản?",
        options: ["A. Về phương thức lao động", "B. Về phương thức sản xuất", "C. Về vị trí trong quan hệ sản xuất tư bản chủ nghĩa", "D. Về vai trò trong quan hệ sản xuất tư bản chủ nghĩa"],
        dap_an: "C",
        giai_thich: "Giai cấp công nhân còn gọi là vô sản vì họ bị tước đoạt tư liệu sản xuất... Điều này thể hiện vị trí của họ trong quan hệ sản xuất tư bản chủ nghĩa."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 15 ---
const de15 = [
    {
        cau: "Câu 1: Những trở ngại đối với quá trình thực hiện dân chủ xã hội chủ nghĩa ở Việt Nam trong giai đoạn hiện nay là gì?",
        options: ["A. Âm mưu diễn biến hòa bình;", "B. Những tiêu cực trong xã hội chưa được khắc phục triệt để;", "C. Xuất phát từ nền kinh tế kém phát triển;", "D. Xuất phát từ nền kinh tế kém phát triển, tiêu cực trong xã hội chưa được khắc phục triệt để và âm mưu diễn biến hòa bình của các thế lực thù địch"],
        dap_an: "D",
        giai_thich: "Thực tiễn xây dựng dân chủ XHCN ở Việt Nam đối mặt với nhiều trở ngại như nền kinh tế kém phát triển, các tiêu cực xã hội, và âm mưu diễn biến hòa bình của các thế lực thù địch."
    },
    {
        cau: "Câu 2: Thực tiễn cho thấy, bản chất tốt đẹp và tính ưu việt của nền dân chủ xã hội chủ nghĩa ở Việt Nam ngày càng thể hiện ở giá trị nào?",
        options: ["A. Bảo đảm và phát huy quyền làm chủ của nhân dân", "B. (Lựa chọn khác)", "C. (Lựa chọn khác)", "D. (Lựa chọn khác)"],
        dap_an: "A",
        giai_thich: "(Không có lời giải chi tiết) Đáp án A được chọn trong nguồn. Thông thường, tính ưu việt thể hiện ở việc bảo đảm và phát huy quyền làm chủ của nhân dân."
    },
    // Lưu ý: Câu 3, 4, 7, 13, 25 bị thiếu trong file Word bạn gửi. Tôi sẽ bỏ qua chúng.
    {
        cau: "Câu 5: Nền dân chủ xã hội chủ nghĩa chính thức được xác lập khi nào?",
        options: ["A. Cách mạng tháng 10 Nga 1917 thành công;", "B. Sau Công xã Pari 1871;", "C. Sau chiến tranh thế giới lần thứ nhất;", "D. Sau chiến tranh thế giới lần thứ hai"],
        dap_an: "A",
        giai_thich: "Cách mạng Tháng Mười Nga (1917) thành công đã mở ra thời đại mới... chính thức xác lập nền dân chủ xã hội chủ nghĩa."
    },
    {
        cau: "Câu 6: Đặc điểm nào sau đây KHÔNG phải là quan điểm của Chủ nghĩa Mác – Lênin về dân chủ xã hội chủ nghĩa?",
        options: ["A. Là chế độ thống trị của đa số với thiểu số, vì lợi ích của đa số;", "B. Là chế độ dân chủ có định hướng cơ bản xóa bỏ giai cấp;", "D. Là chế độ dân chủ ngày càng hoàn thiện và tồn tại vĩnh viễn"], // Lưu ý: Nguồn thiếu C
        dap_an: "D",
        giai_thich: "Theo Chủ nghĩa Mác – Lênin, dân chủ... là một phạm trù lịch sử và sẽ tiêu vong khi xã hội đạt đến chủ nghĩa cộng sản hoàn toàn."
    },
    {
        cau: "Câu 8: Đảng ta đề ra các quy chế dân chủ từ cơ sở đến Trung ương và trong các tổ chức chính trị - xã hội đều thực hiện phương châm gì?",
        options: ["A. Dân biết, dân bàn, dân làm, dân kiểm tra;", "B. Tập trung dân chủ cho giai cấp nông dân;", "C. Cải cách tổ chức và hoạt động của bộ máy nhà nước;", "D. Nhà nước và nhân dân cùng làm"],
        dap_an: "A",
        giai_thich: "Các quy chế dân chủ... đều phải thực hiện phương châm “dân biết, dân bàn, dân làm, dân kiểm tra” để bảo đảm quyền làm chủ của nhân dân."
    },
    {
        cau: "Câu 9: Nội dung quan trọng trong Tư tưởng Hồ Chí Minh mà Đảng Cộng sản Việt Nam cần quán triệt...?",
        options: ["A. “Lấy dân làm gốc”;", "B. “Xóa bỏ giai cấp”;", "C. “Dĩ nhất biến, ứng vạn biến”;", "D. “Vô sản tất cả các nước đoàn kết lại”"],
        dap_an: "A",
        giai_thich: "Chủ tịch Hồ Chí Minh khẳng định “Lấy dân làm gốc” là tư tưởng cốt lõi, là nền tảng để phát huy quyền làm chủ của nhân dân."
    },
    {
        cau: "Câu 10: Theo V.I.Lênin, con đường biện chứng của quá trình phát triển dân chủ là gì?",
        options: ["A. Từ dân chủ tư sản đến dân chủ vô sản, từ dân chủ vô sản đến không còn dân chủ;", "B. Từ dân chủ vô sản đến dân chủ tư sản...;", "C. Từ chuyên chế đến dân chủ tư sản...;", "D. Từ chế độ quân chủ đến dân chủ tư sản..."],
        dap_an: "A",
        giai_thich: "V.I. Lênin chỉ ra rằng dân chủ phát triển từ các hình thức thấp hơn (dân chủ tư sản) lên hình thức cao nhất (dân chủ vô sản/XHCN), sau đó sẽ tự tiêu vong."
    },
    {
        cau: "Câu 11: Theo V.I.Lênin, dân chủ với tư cách là một hình thái nhà nước, kiểu nhà nước sẽ mất đi trong xã hội nào?",
        options: ["A. Xã hội cộng sản chủ nghĩa;", "B. Xã hội xã hội chủ nghĩa;", "C. Thời kỳ quá độ lên chủ nghĩa xã hội;", "D. Xã hội tư bản chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Dân chủ là một hình thức nhà nước và sẽ mất đi khi nhà nước tiêu vong trong giai đoạn cao của chủ nghĩa cộng sản, tức xã hội cộng sản chủ nghĩa."
    },
    {
        cau: "Câu 12: Theo V.I.Lênin, càng hoàn thiện bao nhiêu, nền dân chủ xã hội chủ nghĩa lại càng tự tiêu vong bấy nhiêu, thực chất của vấn đền này là?",
        options: ["D. Là một phạm trù mang tính lịch sử;", "A. Là một phạm trù thuộc lĩnh vực chính trị;", "B. Là một hình thức của các tổ chức xã hội;", "C. Là một giá trị xã hội mang tính toàn nhân loại"],
        dap_an: "D",
        giai_thich: "Thực chất của vấn đề là dân chủ XHCN vẫn là một hình thức nhà nước... và do đó vẫn mang tính lịch sử, sẽ mất đi khi không còn cần thiết."
    },
    {
        cau: "Câu 14: Theo Chủ nghĩa Mác – Lênin, với tư cách là một giá trị xã hội mang tính toàn nhân loại, Dân chủ có nghĩa là gì?",
        options: ["A. “Dân là chủ” và “dân làm chủ”;", "B. Là một hình thức của các tổ chức xã hội;", "C. Là một hình thức nhà nước;", "D. Là cộng động nhà nước"],
        dap_an: "A",
        giai_thich: "Dân chủ với tư cách là giá trị nhân loại... Tư tưởng Hồ Chí Minh đã diễn đạt điều này bằng khẩu hiệu “Dân là chủ” và “dân làm chủ”."
    },
    {
        cau: "Câu 15: Một trong những quan niệm của Chủ nghĩa Mác - Lênin về dân chủ ở phương diện quyền lực là gì?",
        options: ["A. Dân chủ là một nguyên tắc – nguyên tắc dân chủ;", "B. Dân chủ là quyền lực thuộc về nhân dân;", "C. Dân chủ là quyền lực thuộc về nhà nước;", "D. Dân chủ là một phạm trù lịch sử"],
        dap_an: "B",
        giai_thich: "Dân chủ trên phương diện quyền lực (khía cạnh chính trị) có nghĩa là quyền lực thuộc về nhân dân."
    },
    {
        cau: "Câu 16: Theo quan niệm của Đảng ta, thế nào là nhà nước dân chủ?",
        options: ["A. Nhà nước của nhân dân, do nhân dân, vì nhân dân;", "B. Nhà nước công bằng, văn minh;", "C. Nhà nước luôn chăm lo cho dân;", "D. Nhà nước của mọi tầng lớp, giai cấp"],
        dap_an: "A",
        giai_thich: "Đảng Cộng sản Việt Nam khẳng định Nhà nước XHCN ở Việt Nam là Nhà nước của nhân dân, do nhân dân, vì nhân dân."
    },
    {
        cau: "Câu 17: Một trong những quan niệm của Chủ nghĩa Mác - Lênin về dân chủ ở phương diện tổ chức và quản lý xã hội là gì?",
        options: ["A. Dân chủ là quyền lực thuộc về nhân dân;", "B. Dân chủ là một nguyên tắc – nguyên tắc dân chủ;", "C. Dân chủ là sự thống trị của giai cấp công nhân;", "D. Dân chủ là một hình thái hay hình thức nhà nước"],
        dap_an: "B",
        giai_thich: "Dân chủ ở phương diện tổ chức và quản lý xã hội được coi là một nguyên tắc —nguyên tắc dân chủ."
    },
    {
        cau: "Câu 18: Đâu là bản chất của nền dân chủ xã hội chủ nghĩa về phương diện kinh tế?",
        options: ["A. Là nền dân chủ mang bản chất giai cấp công nhân...;", "B. Là nền dân chủ có sự kết hợp hài hòa về lợi ích giữa cá nhân, tập thể và lợi ích của toàn xã hội;", "C. Là nền dân chủ phi giai cấp;", "D. Tất cả đều sai"],
        dap_an: "B",
        giai_thich: "Bản chất kinh tế của dân chủ XHCN là dựa trên chế độ công hữu, thể hiện qua việc kết hợp hài hòa về lợi ích giữa cá nhân, tập thể và lợi ích của toàn xã hội."
    },
    {
        cau: "Câu 19: Theo Chủ nghĩa Mác - Lênin, bản chất dân chủ của xã hội mới mà giai cấp công nhân... đang hướng tới là gì?",
        options: ["A. Sử dụng có hiệu quả quyền lực nhà nước để xây dựng thiết chế mà ở đó nhân dân từng bước trở thành người chủ của xã hội;", "B. ...con người trở thành người chủ...;", "C. ...công nhân trở thành người chủ...;", "D. ...nông dân từng bước trở thành người chủ..."],
        dap_an: "A",
        giai_thich: "Mục tiêu của GCCN khi giành chính quyền là thiết lập chế độ mà ở đó nhân dân từng bước trở thành người chủ của xã hội."
    },
    {
        cau: "Câu 20: Nhà nước xã hội chủ nghĩa được xây dựng trên nền tảng tinh thần nào?",
        options: ["A. Lý luận của chủ nghĩa Mác - Lênin;", "B. Những giá trị văn hóa tiên tiến của nhân loại;", "C. Những bản sắc riêng của dân tộc;", "D. Lý luận của chủ nghĩa Mác – Lênin kết hợp giá trị văn hóa tiên tiến của nhân loại và bản sắc riêng của dân tộc"],
        dap_an: "D",
        giai_thich: "Ở Việt Nam, nền tảng tinh thần là sự kết hợp nhuần nhuyễn giữa Lý luận Mác – Lênin, giá trị văn hóa tiên tiến của nhân loại, và bản sắc dân tộc."
    },
    {
        cau: "Câu 21: Nhà nước xã hội chủ nghĩa phải đáp ứng những đòi hỏi gì để cải tạo xã hội cũ, xây dựng thành công xã hội mới?",
        options: ["A. Là một bộ máy có đầy đủ sức mạnh để trấn áp kẻ thù...;", "B. Là một tổ chức có đủ năng lực để quản lý và xây dựng...;", "C. Đặt vấn đề quản lý và xây dựng kinh tế là then chốt...;", "D. Là một bô máy có đầy đủ sức mạnh để trấn áp..., có đủ năng lực để quản lý... và quản lý, xây dựng kinh tế là then chốt..."],
        dap_an: "D",
        giai_thich: "Nhà nước XHCN phải thực hiện đồng thời hai chức năng: trấn áp (chức năng giai cấp) và tổ chức, xây dựng (chức năng xã hội). Trong đó, quản lý và xây dựng kinh tế là then chốt, quyết định."
    },
    {
        cau: "Câu 22: Trong nền dân chủ xã hội chủ nghĩa thì nhà nước xã hội chủ nghĩa là nhà nước như thế nào?",
        options: ["A. Phương thức thể hiện và thực hiện dân chủ;", "B. Biện pháp thể hiện và thực hiện dân chủ;", "C. Công cụ thể hiện và thực hiện dân chủ;", "D. Cơ sở thể hiện và thực hiện dân chủ"],
        dap_an: "C",
        giai_thich: "Nhà nước xã hội chủ nghĩa là công cụ để giai cấp công nhân và nhân dân lao động sử dụng có hiệu lực để... phát triển nền dân chủ."
    },
    {
        cau: "Câu 23: Khi coi dân chủ là một giá trị xã hội mang tính toàn nhân loại, Hồ Chí Minh đã khẳng định điều gì?",
        options: ["A. Dân chủ là dân là chủ và dân làm chủ;", "B. Dân chủ là một phạm trù lịch sử;", "C. Dân chủ là một hình thức nhà nước;", "D. Dân chủ là một giá trị nhân văn"],
        dap_an: "A",
        giai_thich: "Hồ Chí Minh đã khẳng định: “Dân chủ là dân là chủ và dân làm chủ”."
    },
    {
        cau: "Câu 24: Theo Hồ Chí Minh, dân chủ trong hai lĩnh vực nào là quan trọng hàng đầu và nổi bật nhất?",
        options: ["A. Dân chủ trong kinh tế và trong chính trị;", "B. Dân chủ trong kinh tế và trong văn hóa - tinh thần;", "C. Dân chủ trong tư tưởng và trong chính trị;", "D. Dân chủ trong chính trị và trong văn hóa - tinh thần"],
        dap_an: "A",
        giai_thich: "Trong tư tưởng Hồ Chí Minh, dân chủ phải được thực hiện trong tất cả các lĩnh vực, nhưng kinh tế và chính trị... là hai lĩnh vực quan trọng hàng đầu, quyết định."
    },
    {
        cau: "Câu 26: “Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều là của dân… Nói tóm lại, quyền hành và lực lượng đều ở dân ”. Nhận định trên của ai?",
        options: ["A. Hồ Chí Minh;", "B. Phạm Văn động;", "C. Trường Chinh;", "D. Lê Duẩn"],
        dap_an: "A",
        giai_thich: "Đây là một trong những câu nói tiêu biểu của Chủ tịch Hồ Chí Minh, thể hiện bản chất dân chủ của Nhà nước Việt Nam."
    },
    {
        cau: "Câu 27: Đảng Cộng sản Việt Nam khẳng định, nền dân chủ mà chúng ta chủ trương xây dựng và thực hiện triệt để là nền dân chủ nào?",
        options: ["A. Nền dân chủ xã hội chủ nghĩa;", "B. Nền dân chủ chủ nô;", "C. Nền dân chủ tư sản;", "D. Nền dân chủ phong kiến"],
        dap_an: "A",
        giai_thich: "Mục tiêu xây dựng và thực hiện triệt để của Đảng Cộng sản Việt Nam là Nền dân chủ xã hội chủ nghĩa."
    },
    {
        cau: "Câu 28: Đảng ta khẳng định một trong những đặc trưng của chủ nghĩa xã hội Việt Nam là gì ?",
        options: ["A. Là nền dân chủ mà ở đó kinh tế phát triển vượt bậc;", "B. Là nền dân chủ cao hơn về tốc độ phát triển chỉ số con người;", "C. Là nền dân chủ có chuyên chính vô sản của giai cấp công nhân;", "D. Do nhân dân làm chủ"],
        dap_an: "D",
        giai_thich: "Một trong tám đặc trưng cơ bản của CNXH Việt Nam được Đảng xác định là: Do nhân dân làm chủ (thực hiện nền dân chủ XHCN)."
    },
    {
        cau: "Câu 29: “Mọi đường lối, chính sách của Đảng pháp luật của Nhà nước đều vì lợi ích của nhân dân, có sự tham gia ý kiến của nhân dân”. Nhận định trên của ai?",
        options: ["A. Đảng cộng sản Việt Nam;", "B. Hồ Chí Minh;", "C. Nguyễn Văn Linh;", "D. Nguyễn Phú Trọng"],
        dap_an: "A",
        giai_thich: "Nhận định này là sự khẳng định của Đảng Cộng sản Việt Nam về nguyên tắc hoạt động của Nhà nước pháp quyền XHCN."
    },
    {
        cau: "Câu 30: Trong nhà nước pháp quyền xã hội chủ nghĩa, hoạt động của các cơ quan phải có sự kiểm soát lẫn nhau, tất cả vì mục tiêu gì?",
        options: ["A. Phục vụ nhân dân;", "B. Tiến lên chủ nghĩa xã hội;", "C. Công bằng trong xã hội;", "D. Bình đẳng trong xã hội"],
        dap_an: "A",
        giai_thich: "Các cơ quan nhà nước phải có sự phân công, phối hợp, kiểm soát lẫn nhau, tất cả vì mục tiêu phục vụ nhân dân."
    },
    {
        cau: "Câu 31: Nguyên tắc tổ chức và hoạt động của bộ máy quản lý nhà nước Việt Nam... là gì?",
        options: ["A. Tập trung dân chủ;", "B. Thống nhất quyền lực;", "C. Có phân công, phân cấp;", "D. Tập trung dân chủ, thống nhất quyền lực, có phân công, phân cấp"],
        dap_an: "D",
        giai_thich: "Cương lĩnh 1991 (bổ sung 2011) quy định nguyên tắc tổ chức của bộ máy quản lý nhà nước theo nguyên tắc tập trung dân chủ, thống nhất quyền lực, có phân công, phân cấp."
    },
    {
        cau: "Câu 32: Theo Hiến pháp 2013, nhân dân giám sát hoạt động của nhà nước theo phương châm nào?",
        options: ["A. Dân biết, dân bàn, dân kiểm tra...;", "B. Nhà nước phục vụ nhân dân...;", "C. Nhà nước lắng nghe ý kiến của nhân dân và chịu sự kiểm soát của nhân dân;", "D. Nhà nước phải được hoàn thiện bằng việc ban hành các cơ chế..."],
        dap_an: "C",
        giai_thich: "Nhà nước pháp quyền xã hội chủ nghĩa phải tôn trọng và lắng nghe ý kiến của nhân dân, chịu sự giám sát của nhân dân."
    },
    {
        cau: "Câu 33: Để phát huy dân chủ ở Việt Nam hiện nay cần làm những gì?",
        options: ["A. Xây dựng đảng cộng sản Việt Nam trong sạch, vững mạnh;", "B. Xây dựng nhà nước pháp quyền xã hội chủ nghĩa vững mạnh;", "C. Nâng cao vai trò của các tổ chức chính trị - xã hội;", "D. Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh, xây dựng nhà nước pháp quyền xã hội chủ nghĩa vững mạnh, nâng cao vai trò của các tổ chức chính trị - xã hội"],
        dap_an: "D",
        giai_thich: "Việc phát huy dân chủ đòi hỏi phải thực hiện đồng bộ các giải pháp liên quan đến Đảng (lãnh đạo), Nhà nước (quản lý) và các tổ chức chính trị - xã hội (phản biện, giám sát)."
    },
    {
        cau: "Câu 34: Để đảm bảo vai trò lãnh đạo Đảng cộng sản Việt Nam cần làm gì?",
        options: ["A. Vững mạnh về chính trị, tư tưởng và tổ chức;", "B. Thường xuyên tự đổi mới, tự chỉnh đốn;", "C. Dân chủ hóa trong sinh hoạt...;", "D. Vững mạnh về chính trị, tư tưởng và tổ chức, thường xuyên tự đổi mới, tự chỉnh đốn, dân chủ hóa trong sinh hoạt..."],
        dap_an: "D",
        giai_thich: "Để đảm bảo vai trò lãnh đạo, Đảng phải vững mạnh về chính trị, tư tưởng và tổ chức, đồng thời thường xuyên tự đổi mới, tự chỉnh đốn, thực hiện nguyên tắc tập trung dân chủ..."
    },
    {
        cau: "Câu 35: Mối quan hệ giữa dân chủ xã hội chủ nghĩa và nhất nguyên về chính trị là gì?",
        options: ["A. Dân chủ xã hội chủ nghĩa và nhất nguyên về chính trị loại trừ nhau;", "B. Chỉ có thể có dân chủ xã hội chủ nghĩa đa nguyên;", "C. Là nền dân chủ được lãnh đạo bởi giai cấp nông dân;", "D. Nhất nguyên về chính trị với sự lãnh đạo của Đảng Cộng sản là điều kiện cho dân chủ xã hội chủ nghĩa ra đời, tồn tại và phát triển"],
        dap_an: "D",
        giai_thich: "Nhất nguyên về chính trị (sự lãnh đạo duy nhất của Đảng Cộng sản) là điều kiện tiên quyết để bảo đảm bản chất và con đường phát triển của nền dân chủ xã hội chủ nghĩa."
    },
    {
        cau: "Câu 36: Tính ưu việt về mặt bản chất của Nhà nước xã hội chủ nghĩa được thể hiện trên phương diện kinh tế nào?",
        options: ["A. Chịu sự quy định của quan hệ công hữu về tư liệu sản xuất chủ yếu;", "B. Chịu sự quy định của quan hệ sản xuất tàn dư...;", "C. Mang bản chất giai cấp công nhân;", "D. Chịu sự quy định của quan hệ tư hữu..."],
        dap_an: "A",
        giai_thich: "Bản chất kinh tế của Nhà nước XHCN được quy định bởi chế độ công hữu về tư liệu sản xuất chủ yếu."
    },
    {
        cau: "Câu 37: Đâu không phải là bản chất của nhà nước xã hội chủ nghĩa?",
        options: ["A. Được xây dựng trên nền tảng tinh thần là lý luận của chủ nghĩa Mác - Lênin;", "B. Là nhà nước “nửa nhà nước”;", "C. Mang bản chất giai cấp công nhân;", "D. Chịu sự quy định của quan hệ sở hữu tư nhân về tư liệu sản xuất chủ yếu"],
        dap_an: "D",
        giai_thich: "Bản chất của Nhà nước XHCN phải dựa trên chế độ sở hữu công... Do đó, việc chịu sự quy định của quan hệ sở hữu tư nhân... là không phải bản chất của nó."
    },
    {
        cau: "Câu 38: Căn cứ vào tính chất của quyền lực nhà nước, chức năng của nhà nước xã hội chủ nghĩa được chia thành...?",
        options: ["A. Chức năng giai cấp, chức năng xã hội;", "B. Chức năng đối nội, chức năng đối ngoại;", "C. Chức năng đối nội, chức năng chính trị;", "D. Chức năng kinh tế, chức năng chính trị"],
        dap_an: "A",
        giai_thich: "Dựa vào tính chất của quyền lực (thể hiện bản chất giai cấp), chức năng được chia thành: chức năng giai cấp (trấn áp) và chức năng xã hội (tổ chức, xây dựng)."
    },
    {
        cau: "Câu 39: Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng của nhà nước xã hội chủ nghĩa được chia thành...?",
        options: ["A. Chức năng giai cấp, chức năng xã hội;", "B. Chức năng đối nội, chức năng đối ngoại;", "C. Chức năng đối nội, chức năng chính trị;", "D. Chức năng kinh tế, chính trị"],
        dap_an: "B",
        giai_thich: "Dựa vào phạm vi tác động (không gian), chức năng được chia thành: chức năng đối nội (trong nước) và chức năng đối ngoại (quốc tế)."
    },
    {
        cau: "Câu 40: Căn cứ vào lĩnh vực tác động của quyền lực nhà nước, chức năng của nhà nước xã hội chủ nghĩa được chia thành...?",
        options: ["A. Chức năng giai cấp, chức năng xã hội;", "B. Chức năng đối nội, chức năng đối ngoại;", "C. Chức năng đối nội, chức năng chính trị;", "D. Chức năng kinh tế, chính trị, văn hóa, xã hội"],
        dap_an: "D",
        giai_thich: "Dựa vào lĩnh vực tác động, chức năng Nhà nước được chia thành: chính trị, kinh tế, văn hóa, xã hội."
    },
    {
        cau: "Câu 41: Dân chủ XHCN có mối quan hệ như thế nào với việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa?",
        options: ["A. Là cơ sở, nền tảng;", "B. Là cơ sở, điều kiện;", "C. Là cơ sở, cách thức;", "D. Là cơ sở, động lực"],
        dap_an: "A",
        giai_thich: "Nền dân chủ xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của Nhà nước xã hội chủ nghĩa."
    },
    {
        cau: "Câu 42: Trên cơ sở nền dân chủ XHCN, Nhà nước XHCN trở thành công cụ quan trọng trong việc thực thi quyền gì của nhân dân?",
        options: ["A. Quyền làm chủ của nhân dân;", "B. Quyền tự do phát triển của nhân dân;", "C. Quyền chính trị của nhân dân;", "D. Quyền làm mọi việc của nhân dân"],
        dap_an: "A",
        giai_thich: "Nhà nước XHCN là công cụ quan trọng để nhân dân thực thi quyền làm chủ của mình đối với nhà nước và xã hội."
    },
    {
        cau: "Câu 43: Trên cơ sở nền dân chủ XHCN, yếu tố nào trở thành công cụ quan trọng trong việc thực thi quyền làm chủ của nhân dân?",
        options: ["A. Nhà nước xã hội chủ nghĩa;", "B. Mặt trận tổ quốc;", "C. Đảng công sản;", "D. Các tổ chức xã hội"],
        dap_an: "A",
        giai_thich: "Yếu tố trở thành công cụ quan trọng nhất để thực thi quyền làm chủ của nhân dân là Nhà nước xã hội chủ nghĩa."
    },
    {
        cau: "Câu 44: Nền dân chủ xã hội chủ nghĩa mang bản chất của giai cấp nào?",
        options: ["A. Giai cấp công nhân;", "B. Tầng lớp trí thức;", "C. Quần chúng nhân dân;", "D. Giai cấp nông dân"],
        dap_an: "A",
        giai_thich: "Nền dân chủ xã hội chủ nghĩa mang bản chất giai cấp công nhân."
    },
    {
        cau: "Câu 45: Đảng cộng sản Việt Nam đã xác định toàn bộ tổ chức và hoạt động của hệ thống chính trị nước ta... là nhằm xây dựng... cái gì?",
        options: ["A. Nền dân chủ Xã hội chủ nghĩa, bảo đảm quyền lực thuộc về nhân dân;", "B. Nhà nước xã hội chủ nghĩa;", "C. Nền dân chủ, đảm bảo quyền lực thuộc;", "D. Hệ thống pháp luật về giai cấp công nhân"],
        dap_an: "A",
        giai_thich: "Mục tiêu tổng quát của việc xây dựng hệ thống chính trị là hoàn thiện Nền dân chủ Xã hội chủ nghĩa, bảo đảm quyền lực thuộc về nhân dân."
    },
    {
        cau: "Câu 46: Hình thức dân chủ nào mà được thực hiện do nhân dân “ủy quyền”...?",
        options: ["A. Dân chủ gián tiếp;", "B. Dân chủ trực tiếp;", "C. Dân chủ hiến định;", "D. Dân chủ bán trực tiếp"],
        dap_an: "A",
        giai_thich: "Hình thức dân chủ thông qua người đại diện, được thực hiện do nhân dân “ủy quyền”, gọi là Dân chủ gián tiếp."
    },
    {
        cau: "Câu 47: Hình thức dân chủ nào mà thông qua đó nhân dân bằng hành động của mình thực hiện quyền làm chủ...?",
        options: ["A. Dân chủ trực tiếp;", "B. Dân chủ gián tiếp;", "C. Dân chủ hiến định;", "D. Dân chủ bán trực tiếp"],
        dap_an: "A",
        giai_thich: "Hình thức dân chủ mà nhân dân trực tiếp tham gia bằng hành động... gọi là Dân chủ trực tiếp."
    },
    {
        cau: "Câu 48: Theo Chủ nghĩa Mác – Lênin, nhà nước xã hội chủ nghĩa ở các quốc gia khác nhau có điểm gì chung?",
        options: ["A. Là tổ chức thực hiện quyền lực của nhân dân, đặt dưới sự lãnh đạo của Đảng cộng sản;", "B. Là tổ chức quyền lực của nhân dân, đặt dưới sự lãnh đạo của Đảng;", "C. Là tổ chức thực hiện quyền lực của một bộ phận nhân dân...;", "D. Nhà nước tồn tại vĩnh viễn"],
        dap_an: "A",
        giai_thich: "Điểm chung cốt lõi của các Nhà nước XHCN là đều là tổ chức thực hiện quyền lực của nhân dân... và phải đặt dưới sự lãnh đạo của Đảng Cộng sản."
    },
    {
        cau: "Câu 49: Theo Chủ nghĩa Mác - Lênin, nội hàm cơ bản của dân chủ xã hội chủ nghĩa là gì?",
        options: ["A. Toàn bộ quyền lực thuộc về nhân dân;", "B. Quyền lực thuộc về giai cấp công nhân;", "C. Quyền lực thuộc về giai cấp nông dân;", "D. Quyền lực thuộc về người lãnh đạo"],
        dap_an: "A",
        giai_thich: "Nội hàm cơ bản của dân chủ XHCN là toàn bộ quyền lực thuộc về nhân dân."
    },
    {
        cau: "Câu 50: Theo Chủ nghĩa Mác - Lênin, định hướng cơ bản của dân chủ xã hội chủ nghĩa là gì?",
        options: ["A. Xóa bỏ giai cấp;", "B. Xóa bỏ pháp luật;", "C. Bảo vệ giai cấp;", "D. Chuyên chính giai cấp"],
        dap_an: "A",
        giai_thich: "Định hướng cơ bản, mục tiêu cuối cùng của dân chủ XHCN là xóa bỏ giai cấp, dẫn đến sự tiêu vong của dân chủ như một hình thức nhà nước."
    },
    {
        cau: "Câu 51: Đâu là bản chất của nền dân chủ xã hội chủ nghĩa về phương diện chính trị?",
        options: ["A. Là nền dân chủ mang bản chất giai cấp công nhân, có tính nhân dân rộng rãi và tính dân tộc sâu sắc;", "B. Là nền dân chủ có sự kết hợp hài hòa về lợi ích...;", "C. Là nền dân chủ được xây dựng dựa trên chế độ công hữu...;", "D. Là nền dân chủ phi giai cấp"],
        dap_an: "A",
        giai_thich: "Bản chất chính trị của nền dân chủ XHCN ở Việt Nam...: mang bản chất giai cấp công nhân, có tính nhân dân rộng rãi và tính dân tộc sâu sắc."
    },
    {
        cau: "Câu 52: Đâu là bản chất của nền dân chủ xã hội chủ nghĩa về phương diện kinh tế?",
        options: ["A. Là nền dân chủ mang bản chất giai cấp công nhân...;", "B. Là nền dân chủ có sự kết hợp hài hòa về lợi ích...;", "C. Là nền dân chủ được xây dựng dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu của toàn xã hội;", "D. Là nền dân chủ phi giai cấp"],
        dap_an: "C",
        giai_thich: "Bản chất kinh tế của CNXH là dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu của toàn xã hội."
    },
    {
        cau: "Câu 53: Đâu là bản chất của nền dân chủ xã hội chủ nghĩa về phương diện văn hóa – tư tưởng?",
        options: ["A. Là nền dân chủ mang bản chất giai cấp công nhân...;", "B. Là nền dân chủ có sự kết hợp hài hòa về lợi ích...;", "C. Là nền dân chủ được xây dựng dựa trên chế độ công hữu...;", "D. Những giá trị dân chủ..."],
        dap_an: "D", // Đáp án D là gần đúng nhất, mặc dù giải thích trong file Word là "(Không có đáp án phù hợp)"
        giai_thich: "Bản chất văn hóa – tư tưởng là sự thống trị của hệ tư tưởng Mác - Lênin... và xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc."
    },
    {
        cau: "Câu 54: Đâu là bản chất của nền dân chủ xã hội chủ nghĩa trên phương diện xã hội ?",
        options: ["A. Là nền dân chủ mang bản chất giai cấp công nhân...;", "B. Là nền dân chủ có sự kết hợp hài hòa về lợi ích giữa cá nhân, tập thể và lợi ích của toàn xã hội;", "C. Là nền dân chủ được xây dựng dựa trên chế độ công hữu...;", "D. Những giá trị dân chủ..."],
        dap_an: "B",
        giai_thich: "Bản chất xã hội của nền dân chủ XHCN được thể hiện qua việc giải quyết hài hòa mối quan hệ lợi ích... sự kết hợp hài hòa về lợi ích giữa cá nhân, tập thể và lợi ích của toàn xã hội."
    },
    {
        cau: "Câu 55: Bản chất của nền dân chủ xã hội chủ nghĩa trên phương diện kinh tế là gì?",
        options: ["A. Là chế độ công hữu về tư liệu sản xuất chủ yếu của toàn xã hội;", "B. Là chế độ xã hội ở đó tài sản thuộc về một số người có quyền lực;", "C. Là chế độ mà ở đó thực hiện sự phân chia tài sản theo năng lực lao động;", "D. Là chế độ triệt tiêu sự cạnh tranh trong kinh tế..."],
        dap_an: "A",
        giai_thich: "Khẳng định lại, bản chất kinh tế của dân chủ XHCN là chế độ công hữu về tư liệu sản xuất chủ yếu."
    },
    {
        cau: "Câu 56: Ở Việt Nam, hình thức dân chủ trực tiếp được thể hiện ở quyền nào?",
        options: ["A. Nhân dân được thông tin về hoạt động của nhà nước;", "B. Nhân dân được bàn bạc về công việc của nhà nước...;", "C. Nhân dân kiểm tra, giám sát hoạt động của cơ quan nhà nước...;", "D. Nhân dân được thông tin..., được bàn bạc..., được kiểm tra, giám sát..."],
        dap_an: "D",
        giai_thich: "Dân chủ trực tiếp bao gồm các quyền cơ bản của công dân như được thông tin, được bàn bạc, và được kiểm tra, giám sát."
    },
    {
        cau: "Câu 57: Nhà nước xã hội chủ nghĩa mang bản chất nào sau đây?",
        options: ["A. Giai cấp công nhân;", "B. Giai cấp nông dân;", "C. Nhân dân lao động;", "D. Tầng lớp trí thức"],
        dap_an: "A",
        giai_thich: "Nhà nước xã hội chủ nghĩa mang bản chất giai cấp công nhân."
    },
    {
        cau: "Câu 58: Theo V.I.Lênin, một trong những tiêu chí phân biệt dân chủ vô sản với các loại dân chủ trước đó là ở chỗ nào?",
        options: ["A. Dân chủ vô sản là chế độ thống trị của đa số với thiểu số, vì lợi ích của đa số;", "B. Dân chủ vô sản là chế độ chính trị của thiểu số với đa số...;", "C. Dân chủ vô sản là chế độ thống trị của tất cả mọi người...;", "D. Dân chủ vô sản có bản chất giống như dân chủ tư sản"],
        dap_an: "A",
        giai_thich: "Dân chủ vô sản khác biệt cơ bản so với dân chủ tư sản ở chỗ nó là chế độ thống trị của đa số nhân dân lao động với thiểu số bóc lột, vì lợi ích của đa số."
    },
    {
        cau: "Câu 59: Đảng ta phải quán triệt tư tưởng gì khi muốn phát huy dân chủ, tạo ra một động lực mạnh mẽ cho sự phát triển đất nước...?",
        options: ["A. “Lấy dân làm gốc”;", "B. “Xóa bỏ giai cấp”;", "C. Đảng lãnh đạo;", "D. Chuyên chính giai cấp"],
        dap_an: "A",
        giai_thich: "Tư tưởng “Lấy dân làm gốc” là nguyên tắc chỉ đạo của Đảng ta nhằm phát huy dân chủ và sức mạnh đại đoàn kết toàn dân tộc."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 16 ---
const de16 = [
    {
        cau: "Câu 1: (CLO5.1). Cơ cấu xã hội - giai cấp là gì?",
        options: ["A. Khái niệm dùng để chỉ hệ thống các thiết chế tồn tại khách quan trong một chế độ xã hội nhất định.", "B. Khái niệm dùng để chỉ hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan, hoạt động hợp pháp trong một chế độ xã hội nhất định.", "C. Khái niệm dùng để chỉ thực trạng các dân tộc và sự khác biệt giữa các dân tộc trong một chế độ xã hội nhất định.", "D. Khái niệm dùng để chỉ sự phát triển sản xuất, sự phát triển ngành nghề và phân công lao động xã hội."],
        dap_an: "B",
        giai_thich: "Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan, thông qua quan hệ về sở hữu tư liệu sản xuất và địa vị chính trị - xã hội."
    },
    {
        cau: "Câu 2: (CLO5.1). Vị trí của cơ cấu xã hội - giai cấp trong cơ cấu xã hội là gì?",
        options: ["A. Vị trí ngang bằng với các loại hình xã hội khác trong hệ thống xã hội.", "B. Vị trí không quan trọng, chịu sự chi phối của các loại hình xã hội khác trong hệ thống xã hội.", "C. Vị trí quan trọng hàng đầu, chi phối các loại hình xã hội hội khác trong hệ thống xã hội.", "D. Không có vị trí gì so với các loại hình xã hội khác trong hệ thống xã hội."],
        dap_an: "C",
        giai_thich: "Trong hệ thống cơ cấu xã hội, cơ cấu xã hội - giai cấp có vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác vì nó liên quan đến quan hệ sở hữu tư liệu sản xuất, địa vị chính trị và các đảng phái chính trị."
    },
    {
        cau: "Câu 3: (CLO5.1). Thời kỳ quá độ lên CNXH, cơ cấu xã hội - giai cấp biến đổi gắn liền và bị quy định bởi cơ sở nào?",
        options: ["A. Cơ sở chính trị.", "B. Cơ cấu kinh tế.", "C. Nền tảng văn hoá.", "D. Nền tảng tinh thần."],
        dap_an: "B",
        giai_thich: "Sự biến đổi của cơ cấu xã hội - giai cấp gắn liền và bị quy định bởi cơ cấu kinh tế của thời kỳ quá độ lên CNXH."
    },
    {
        cau: "Câu 4: (CLO5.1). Nguyên nhân nào dẫn đến những biến đổi đa dạng, phức tạp trong cơ cấu xã hội – giai cấp trong thời kỳ quá độ lên CNXH?",
        options: ["A. Kết cấu kinh tế hàng hóa giản đơn.", "B. Kết cấu kinh tế hàng hóa phức tạp.", "C. Kết cấu kinh tế tập trung bao cấp.", "D. Kết cấu kinh tế nhiều thành phần."],
        dap_an: "D",
        giai_thich: "Trong thời kỳ quá độ, sự tồn tại của kết cấu kinh tế nhiều thành phần (nhiều hình thức sở hữu) là yếu tố quyết định sự biến đổi phức tạp, đa dạng của cơ cấu xã hội - giai cấp."
    },
    {
        cau: "Câu 5: (CLO5.1). Trong thời kỳ quá độ lên CNXH, mức độ liên minh, xích lại gần nhau giữa các giai cấp, tầng lớp trong xã hội tùy thuộc vào yếu tố nào?",
        options: ["A. Điều kiện tự nhiên của đất nước.", "B. Điều kiện kinh tế – xã hội của đất nước.", "C. Điều kiện bên ngoài của đất nước.", "D. Điều kiện văn hóa của đất nước."],
        dap_an: "B",
        giai_thich: "Mức độ xích lại gần nhau giữa các giai cấp, tầng lớp được quy định bởi những điều kiện kinh tế – xã hội cụ thể của đất nước."
    },
    {
        cau: "Câu 6: (CLO5.3). Biến đổi nào không có tính quy luật của cơ cấu xã hội – giai cấp trong thời kỳ quá độ lên CNXH?",
        options: ["A. Biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế của thời kỳ quá độ lên CNXH.", "B. Biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới.", "C. Biến đổi trong mối quan hệ vừa đấu tranh vừa liên minh, từng bước xóa bỏ bất bình đẳng xã hội.", "D. Biến đổi tâm lý trong đời sống xã hội, có xu hướng chống lại nhau giữa các tầng lớp, giai cấp."],
        dap_an: "D",
        giai_thich: "Tính quy luật của cơ cấu xã hội XHCN là hợp tác và gắn bó chặt chẽ. Xu hướng chống lại nhau (D) là đặc trưng của các xã hội đối kháng, không phải quy luật của thời kỳ quá độ lên CNXH."
    },
    {
        cau: "Câu 7: (CLO5.1). Nội dung nào là một trong những biến đổi có tính quy luật của cơ cấu xã hội – giai cấp trong thời kỳ quá độ lên CNXH?",
        options: ["A. Biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế của thời kỳ quá độ lên CNXH.", "B. Không biến đổi và xuất hiện các tầng lớp xã hội mới.", "C. Biến đổi trong mối quan hệ bài trừ lẫn nhau, từng bước xóa bỏ bất bình đẳng xã hội.", "D. Biến đổi tâm lý trong đời sống xã hội, có xu hướng chống lại nhau giữa các tầng lớp, giai cấp."],
        dap_an: "A",
        giai_thich: "Quy luật phổ biến đầu tiên là cơ cấu xã hội - giai cấp biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế."
    },
    {
        cau: "Câu 8: (CLO5.1). Nội dung nào là một trong những biến đổi có tính quy luật của cơ cấu xã hội – giai cấp trong thời kỳ quá độ lên CNXH?",
        options: ["A. Biến đổi tách rời và không bị quy định bởi cơ cấu kinh tế của thời kỳ quá độ lên CNXH.", "B. Không có biến đổi phức tạp, đa dạng hay xuất hiện các tầng lớp mới.", "C. Biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới.", "D. Biến đổi trong mối quan hệ bài trừ lẫn nhau."],
        dap_an: "C",
        giai_thich: "Quy luật thứ hai là cơ cấu xã hội - giai cấp biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới do sự thay đổi của cơ cấu kinh tế."
    },
    {
        cau: "Câu 9: (CLO5.1). Giai cấp nào là lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước ở Việt Nam?",
        options: ["A. Giai cấp công nhân.", "B. Giai cấp nông dân.", "C. Tầng lớp tri thức.", "D. Đội ngũ doanh nhân."],
        dap_an: "A",
        giai_thich: "Giai cấp công nhân giữ vị trí tiên phong, là lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước."
    },
    {
        cau: "Câu 10: (CLO5.1). C.Mác và Ph.Ăngghen coi giai cấp nào là “người bạn đồng minh tự nhiên” của giai cấp công nhân?",
        options: ["A. Giai cấp tư sản.", "B. Giai cấp nông dân.", "C. Tầng lớp trí thức.", "D. Tầng lớp doanh nhân."],
        dap_an: "B",
        giai_thich: "Giai cấp nông dân được coi là “người bạn đồng minh tự nhiên” của giai cấp công nhân do cùng là những người lao động bị áp bức, bóc lột."
    },
    {
        cau: "Câu 11: (CLO5.1). Liên minh công nhân – nông dân – trí thức là do?",
        options: ["A. Nhu cầu nội tại của cách mạng xã hội chủ nghĩa.", "B. Nhiệm vụ của giai cấp công nhân.", "C. Ý chí của Đảng Cộng sản.", "D. Do nhu cầu xây dựng xã hội chủ nghĩa."],
        dap_an: "A",
        giai_thich: "Liên minh giai cấp là nhu cầu nội tại, đòi hỏi khách quan của cách mạng xã hội chủ nghĩa, cần thiết để tập hợp lực lượng thống nhất."
    },
    {
        cau: "Câu 12: (CLO5.1). Theo Lênin, vấn đề mang tính nguyên tắc để đảm bảo thắng lợi của cuộc cách mạng xã hội chủ nghĩa tháng 10 năm 1917 là gì?",
        options: ["A. Vấn đề đối ngoại.", "B. Vấn đề giữ chính quyền.", "C. Vấn đề liên minh công, nông.", "D. Vấn đề giành chính quyền."],
        dap_an: "C",
        giai_thich: "V.I. Lênin coi liên minh công nhân – nông dân là nguyên tắc cao nhất của chuyên chính vô sản, đảm bảo thắng lợi cho cuộc cách mạng và củng cố chính quyền."
    },
    {
        cau: "Câu 13: (CLO5.2). Liên minh giữa giai cấp công nhân với các giai cấp, tầng lớp khác trong xã hội được thực hiện trong giai đoạn nào của cách mạng XHCN?",
        options: ["A. Giai đoạn giành chính quyền.", "B. Giai đoạn xây dựng chế độ xã hội mới.", "C. Giai đoạn giành chính quyền và xây dựng chế độ xã hội.", "D. Giai đoạn phát triển kinh tế và hội nhập quốc tế mới."],
        dap_an: "C",
        giai_thich: "Liên minh được thực hiện trong cả giai đoạn giành chính quyền và xây dựng chế độ xã hội mới (thời kỳ quá độ) để hoàn thành sứ mệnh lịch sử của giai cấp công nhân."
    },
    {
        cau: "Câu 14: (CLO5.2). Lênin dùng thuật ngữ “liên minh đặc biệt” để chỉ liên minh giữa giai cấp công nhân với giai cấp, tầng lớp nào?",
        options: ["A. Giai cấp tư sản và các tầng lớp xã hội khác.", "B. Giai cấp nông dân và các tầng lớp xã hội khác.", "C. Tầng lớp trí thức.", "D. Tầng lớp doanh nhân."],
        dap_an: "B",
        giai_thich: "V.I. Lênin coi chuyên chính vô sản là một hình thức đặc biệt của liên minh giữa giai cấp vô sản với đông đảo những tầng lớp lao động không phải vô sản, chủ yếu là giai cấp nông dân và các tầng lớp lao động khác."
    },
    {
        cau: "Câu 15: (CLO5.2). Theo Lênin “chuyên chính vô sản” là một hình thức đặc biệt của liên minh nào?",
        options: ["A. Giai cấp tư sản và các tầng lớp xã hội khác.", "B. Giữa giai cấp vô sản với đông đảo những tầng lớp lao động không phải vô sản.", "C. Giữa giai cấp vô sản với giai cấp tư sản.", "D. Giữa giai cấp vô sản với tầng lớp doanh nhân."],
        dap_an: "B",
        giai_thich: "Chuyên chính vô sản là hình thức thống trị chính trị của giai cấp công nhân, dựa trên cơ sở liên minh với đông đảo những tầng lớp lao động không phải vô sản (nông dân, trí thức)."
    },
    {
        cau: "Câu 16: (CLO5.2). Vai trò của giai cấp công nhân, giai cấp nông dân và các tầng lớp lao động khác trong thời kỳ quá độ lên CNXH là gì?",
        options: ["A. Lực lượng sản xuất cơ bản, vừa là lực lượng chính trị – xã hội to lớn.", "B. Lực lượng cơ bản và duy nhất trực tiếp sản xuất.", "C. Lực lượng chính trị – xã hội to lớn.", "D. Lực lượng kinh tế – chính trị – xã hội cơ bản to lớn."],
        dap_an: "A",
        giai_thich: "Các giai cấp, tầng lớp trong khối liên minh đều là lực lượng sản xuất cơ bản (tạo ra của cải), đồng thời là lực lượng chính trị – xã hội to lớn."
    },
    {
        cau: "Câu 17: (CLO5.2). Xét dưới góc độ kinh tế, trong thời kỳ quá độ lên CNXH, liên minh giữa giai cấp công nhân với các giai cấp, tầng lớp khác xuất phát từ đâu?",
        options: ["A. Yêu cầu khách quan của quá trình đẩy mạnh công nghiệp hóa, hiện đại hóa.", "B. Yêu cầu chuyển dịch cơ cấu kinh tế từ sản xuất nhỏ sang sản xuất hàng hóa lớn.", "C. Yêu cầu xây dựng nền tảng vật chất – kỹ thuật cần thiết cho CNXH.", "D. Yêu cầu khách quan của quá trình đẩy mạnh công nghiệp hóa, hiện đại hóa, của quá trình chuyển dịch cơ cấu kinh tế từ sản xuất nhỏ sang sản xuất hàng hóa lớn, là yêu cầu xây dựng nền tảng vật chất – kỹ thuật cần thiết cho CNXH."],
        dap_an: "D",
        giai_thich: "Nội dung kinh tế của liên minh là then chốt, bao gồm tổng hợp các yêu cầu khách quan như CNH, HĐH, chuyển dịch cơ cấu kinh tế và xây dựng cơ sở vật chất – kỹ thuật."
    },
    {
        cau: "Câu 18: (CLO5.2). Liên minh giữa giai cấp công nhân với các giai cấp, tầng lớp khác trong xã hội phải được xác định trên lập trường chính trị của giai cấp nào?",
        options: ["A. Đội ngũ trí thức.", "B. Đội ngũ doanh nhân.", "C. Giai cấp nông dân.", "D. Giai cấp công nhân."],
        dap_an: "D",
        giai_thich: "Khối liên minh phải được xây dựng và củng cố trên lập trường chính trị - tư tưởng của giai cấp công nhân để đảm bảo định hướng xã hội chủ nghĩa."
    },
    {
        cau: "Câu 19: (CLO5.2). Tầng lớp, giai cấp cơ bản nào không thuộc cơ cấu xã hội – giai cấp của Việt Nam trong thời kỳ quá độ lên CNXH?",
        options: ["A. Giai cấp công nhân.", "B. Giai cấp nông dân.", "C. Tầng lớp tri thức.", "D. Tầng lớp nông nô."],
        dap_an: "D",
        giai_thich: "Cơ cấu xã hội - giai cấp Việt Nam trong thời kỳ quá độ không còn tồn tại Tầng lớp nông nô, mà chủ yếu là GCCN, GCNN, trí thức, doanh nhân, tiểu chủ."
    },
    {
        cau: "Câu 20: (CLO5.2). Đáp án nào không là đặc điểm giai cấp công nhân Việt Nam trong thời kỳ quá độ lên CNXH?",
        options: ["A. Là giai cấp lãnh đạo cách mạng.", "B. Giữ vị trí tiên phong trong sự nghiệp xây dựng CNXH.", "C. Là lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước.", "D. Là lực lượng đối đầu với các tầng lớp, giai cấp khác."],
        dap_an: "D",
        giai_thich: "Giai cấp công nhân là lực lượng lãnh đạo và tiên phong, họ phải liên minh, hợp tác với các tầng lớp lao động khác, không phải là lực lượng đối đầu."
    },
    {
        cau: "Câu 21: (CLO5.2). Giai cấp công nhân Việt Nam có xu hướng biến đổi như thế nào để đáp ứng yêu cầu của quá trình công nghiệp hóa, hiện đại hóa đất nước?",
        options: ["A. Biến đổi nhanh về số lượng, chậm chạp về chất lượng.", "B. Biến đổi nhanh cả về số lượng, chất lượng.", "C. Biến đổi chậm cả về số lượng, chất lượng.", "D. Biến đổi chậm về số lượng, nhanh về chất lượng."],
        dap_an: "B",
        giai_thich: "Để đáp ứng CNH, HĐH, GCCN Việt Nam có xu hướng biến đổi nhanh cả về số lượng (tăng lên) và chất lượng (trí tuệ hóa, nâng cao tay nghề)."
    },
    {
        cau: "Câu 22: (CLO5.2). Giai cấp nào có vị trí chiến lược trong sự nghiệp công nghiệp hóa, hiện đại hóa nông nghiệp, nông thôn ở Việt Nam?",
        options: ["A. Giai cấp công nhân.", "B. Giai cấp nông dân.", "C. Tầng lớp trí thức.", "D. Đội ngũ doanh nhân."],
        dap_an: "B",
        giai_thich: "Giai cấp nông dân là chủ thể trực tiếp của quá trình công nghiệp hóa, hiện đại hóa nông nghiệp, nông thôn, giữ vị trí chiến lược trong lĩnh vực này."
    },
    {
        cau: "Câu 23: (CLO5.2). Trong thời kỳ quá độ lên CNXH, giai cấp nào có xu hướng biến đổi giảm dần về số lượng và tỷ lệ trong cơ cấu xã hội - giai cấp ở Việt Nam?",
        options: ["A. Giai cấp công nhân.", "B. Giai cấp nông dân.", "C. Tầng lớp trí thức.", "D. Đội ngũ doanh nhân."],
        dap_an: "B",
        giai_thich: "Do quá trình CNH, HĐH và đô thị hóa, giai cấp nông dân có xu hướng dịch chuyển nghề nghiệp, dẫn đến giảm dần về số lượng và tỷ lệ trong cơ cấu xã hội."
    },
    {
        cau: "Câu 24: (CLO5.2). Trong thời kỳ quá độ lên CNXH, giai cấp nông dân có xu hướng biến đổi như thế nào trong cơ cấu xã hội - giai cấp ở Việt Nam?",
        options: ["A. Biến đổi tăng dần về số lượng và tỷ lệ.", "B. Biến đổi giảm dần về số lượng và tỷ lệ.", "C. Biến đổi giảm dần về số lượng và tăng dần về tỷ lệ.", "D. Biến đổi tăng về số lượng và giảm dần tỷ lệ."],
        dap_an: "B",
        giai_thich: "Giai cấp nông dân có xu hướng giảm dần về số lượng và tỷ lệ trong cơ cấu xã hội do dịch chuyển lao động."
    },
    {
        cau: "Câu 25: (CLO5.2). Trong thời kỳ quá độ lên CNXH, đội ngũ nào được xác định là rường cột, chủ nhân tương lai của đất nước?",
        options: ["A. Giai cấp công nhân.", "B. Đội ngũ thanh niên.", "C. Đội ngũ trí thức.", "D. Đội ngũ doanh nhân."],
        dap_an: "B",
        giai_thich: "Đội ngũ thanh niên (thế hệ trẻ) được Đảng ta xác định là rường cột, chủ nhân tương lai của đất nước."
    },
    {
        cau: "Câu 26: (CLO5.2). Trong thời kỳ quá độ lên CNXH, Đảng ta xác định chăm lo, phát triển cho đội ngũ nào vừa là mục tiêu, vừa là động lực bảo đảm cho sự ổn định và phát triển bền vững của đất nước?",
        options: ["A. Phụ nữ.", "B. Đội ngũ thanh niên.", "C. Đội ngũ trí thức.", "D. Đội ngũ doanh nhân."],
        dap_an: "C",
        giai_thich: "Đội ngũ trí thức là lực lượng lao động sáng tạo đặc biệt quan trọng, vừa là mục tiêu (được chăm lo phát triển), vừa là động lực bảo đảm sự phát triển bền vững của đất nước."
    },
    {
        cau: "Câu 27: (CLO5.2). Nội dung nào đội ngũ thanh niên cần xóa bỏ để hình thành được những phẩm chất xứng đáng là rường cột, chủ nhân tương lai của đất nước?",
        options: ["A. Có phẩm chất tốt đẹp.", "B. Có khí phách và quyết tâm hành động thực hiện thành công sự nghiệp công nghiệp hóa, hiện đại hóa.", "C. Có trách nhiệm với sự nghiệp bảo vệ Tổ quốc.", "D. Thực dụng, thực tế vì lợi ích kinh tế."],
        dap_an: "D",
        giai_thich: "Để phát huy vai trò rường cột, thanh niên cần xóa bỏ các biểu hiện tiêu cực, đặc biệt là lối sống thực dụng, thực tế vì lợi ích kinh tế."
    },
    {
        cau: "Câu 28: (CLO5.2). Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam được thể hiện trong những nội dung cơ bản nào?",
        options: ["A. Nội dung kinh tế.", "B. Nội dung chính trị.", "C. Nội dung văn hóa xã hội.", "D. Nội dung chính trị, kinh tế và văn hóa xã hội."],
        dap_an: "D",
        giai_thich: "Liên minh giai cấp được thực hiện toàn diện trên ba lĩnh vực chính: kinh tế, chính trị - xã hội, và văn hóa - xã hội (văn hóa - tư tưởng)."
    },
    {
        cau: "Câu 29: (CLO5.2). Nội dung nào dưới đây là một trong những nhiệm vụ kinh tế xuyên suốt của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam?",
        options: ["A. Phát triển qui mô giáo dục đại học.", "B. Nâng cao chỉ số phát triển con người.", "C. Phát triển kinh tế nông nghiệp theo chuẩn VGAP.", "D. Phát triển kinh tế nhanh và bền vững, giữ vững ổn định kinh tế vĩ mô, đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế; đẩy mạnh công nghiệp hóa, hiện đại hóa…"],
        dap_an: "D",
        giai_thich: "Nhiệm vụ kinh tế cốt lõi là phát triển kinh tế nhanh và bền vững, gắn liền với CNH, HĐH."
    },
    {
        cau: "Câu 30: (CLO5.2). Nội dung kinh tế của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam là nhằm mục đích gì?",
        options: ["A. Tạo cơ sở vững chắc cho khối đoàn kết toàn dân, tạo thành sức mạnh tổng hợp vượt qua mọi khó khăn thử thách.", "B. Thỏa mãn nhu cầu, lợi ích kinh tế thiết thân của các giai cấp, tầng lớp trong xã hội.", "C. Cùng nhau xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.", "D. Quảng bá văn hóa Việt Nam tới cộng đồng thế giới."],
        dap_an: "B",
        giai_thich: "Nội dung kinh tế của liên minh nhằm xây dựng cơ sở vật chất và thỏa mãn nhu cầu, lợi ích kinh tế thiết thân của các giai cấp, tầng lớp."
    },
    {
        cau: "Câu 31: (CLO5.2). Nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam là nhằm mục đích gì?",
        options: ["A. Tạo cơ sở vững chắc cho khối đoàn kết toàn dân, tạo thành sức mạnh tổng hợp vượt qua mọi khó khăn thử thách.", "B. Thỏa mãn nhu cầu, lợi ích kinh tế thiết thân của các giai cấp, tầng lớp trong xã hội.", "C. Cùng nhau xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.", "D. Quảng bá văn hóa Việt Nam tới cộng đồng thế giới."],
        dap_an: "A",
        giai_thich: "Nội dung chính trị nhằm mục đích tạo cơ sở vững chắc cho khối đoàn kết toàn dân (thông qua việc giữ vững vai trò lãnh đạo của Đảng và định hướng XHCN), từ đó tạo ra sức mạnh tổng hợp."
    },
    {
        cau: "Câu 32: (CLO5.2). Nội dung văn hóa xã hội của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam là nhằm mục đích gì?",
        options: ["A. Tạo cơ sở vững chắc cho khối đoàn kết toàn dân, tạo thành sức mạnh tổng hợp vượt qua mọi khó khăn thử thách.", "B. Thỏa mãn nhu cầu, lợi ích kinh tế thiết thân của các giai cấp, tầng lớp trong xã hội.", "C. Cùng nhau xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.", "D. Xây dựng nền tảng kinh tế vững mạnh, từng bước hoàn thiện thể chế kinh tế thị trường."],
        dap_an: "C",
        giai_thich: "Nội dung văn hóa xã hội hướng tới xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc."
    },
    {
        cau: "Câu 33: (CLO5.2). Nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam được thể hiện ở những điểm nào?",
        options: ["A. Giữ vững lập trường chính trị - tư tưởng của giai cấp công nhân.", "B. Giữ vững vai trò lãnh đạo của Đảng Cộng sản Việt Nam.", "C. Bảo vệ vững chắc chế độ chính trị, giữ vững độc lập dân tộc và định hướng đi lên XHCN.", "D. Giữ vững vai trò lãnh đạo của Đảng Cộng sản Việt Nam, kiên định lập trường chính trị - tư tưởng của giai cấp công nhân, bảo vệ vững chắc chế độ chính trị, giữ vững độc lập dân tộc và định hướng đi lên XHCN."],
        dap_an: "D",
        giai_thich: "Nội dung chính trị bao gồm việc đảm bảo sự lãnh đạo của Đảng, giữ vững lập trường GCCN, và bảo vệ chế độ XHCN. Do đó, D là đáp án tổng hợp đầy đủ nhất."
    },
    {
        cau: "Câu 34: (CLO5.2). Cơ cấu xã hội muốn biến đổi theo hướng tích cực phải dựa trên nhân tố nào?",
        options: ["A. Cơ sở tăng trưởng và phát triển của chỉ số phát triển con người.", "B. Cơ sở đa dạng và phát triển văn hoá.", "C. Cơ sở tăng trưởng của thu nhập.", "D. Cơ sở tăng trưởng và phát triển kinh tế nhanh, bền vững."],
        dap_an: "D",
        giai_thich: "Sự biến đổi tích cực của cơ cấu xã hội phải dựa trên nền tảng là tăng trưởng và phát triển kinh tế nhanh, bền vững."
    },
    {
        cau: "Câu 35: (CLO5.3). Dưới góc độ chính trị - xã hội, môn chủ nghĩa xã hội khoa học tập trung nghiên cứu cơ cấu xã hội - giai cấp vì nguyên nhân nào?",
        options: ["A. Là cơ sở để nghiên cứu liên minh giai cấp, tầng lớp trong xã hội.", "B. Là cơ sở để nghiên cứu quá trình đấu tranh giai cấp trong xã hội.", "C. Là cơ sở để nghiên cứu mâu thuẫn giai cấp trong xã hội.", "D. Là cơ sở để nghiên cứu xung đột giai cấp trong xã hội."],
        dap_an: "A",
        giai_thich: "CNXHKH tập trung nghiên cứu cơ cấu xã hội - giai cấp vì đây là một trong những cơ sở để nghiên cứu vấn đề liên minh giai cấp, tầng lớp."
    },
    {
        cau: "Câu 36: (CLO5.3). Đáp án nào không thuộc nội dung cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: ["A. Tổng thể các giai cấp, tầng lớp, các nhóm xã hội có mối quan hệ hợp tác và gắn bó chặt chẽ với nhau.", "B. Gồm giai cấp công nhân, giai cấp nông dân, tầng lớp trí thức, tầng lớp doanh nhân, tầng lớp tiểu chủ.", "C. Mỗi giai cấp, tầng lớp có những vị trí và vai trò xác định.", "D. Là giai cấp có số lượng đông nhất nên giai cấp nông dân giữ vai trò lãnh đạo công cuộc xây dựng đất nước."],
        dap_an: "D",
        giai_thich: "Trong CNXH, Giai cấp công nhân giữ vai trò lãnh đạo, không phải giai cấp nông dân (mặc dù nông dân đông đảo)."
    },
    {
        cau: "Câu 37: (CLO5.3). Yếu tố quyết định mối quan hệ hợp tác và gắn bó chặt chẽ giữa các giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH là gì?",
        options: ["A. Cùng đấu tranh giành chính quyền.", "B. Cùng chung sức cải tạo xã hội cũ, xây dựng xã hội mới.", "C. Cùng chung sức chống lại các thế lực cách mạng.", "D. Cùng trấn áp kẻ thù chung."],
        dap_an: "B",
        giai_thich: "Yếu tố quyết định sự hợp tác là các giai cấp, tầng lớp có chung mục tiêu cải tạo xã hội cũ và xây dựng xã hội mới."
    },
    {
        cau: "Câu 38: (CLO5.3). Cơ sở và điều kiện thuận lợi cho những biến đổi tích cực của cơ cấu xã hội là gì?",
        options: ["A. Kinh tế tăng trưởng hàng năm cao.", "B. Bình quân thu nhập của dân số liên tục tăng.", "C. Cơ số doanh nghiệp mở mới, đặc biệt là doanh nghiệp vừa và nhỏ là chủ yếu.", "D. Tăng trưởng kinh tế gắn với phát triển văn hóa, đảm bảo tiến bộ, công bằng xã hội và bảo vệ tài nguyên môi trường."],
        dap_an: "D",
        giai_thich: "Biến đổi tích cực phải dựa trên sự kết hợp hài hòa giữa tăng trưởng kinh tế với phát triển văn hóa, công bằng xã hội và bảo vệ môi trường."
    },
    {
        cau: "Câu 39: (CLO5.3). Cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên CNXH biến đổi theo hướng nào?",
        options: ["A. Ổn định và không xuất hiện các tầng lớp xã hội mới.", "B. Ổn định và xuất hiện rất ít các tầng lớp xã hội mới.", "C. Phức tạp, đa dạng, xuất hiện các tầng lớp xã hội mới.", "D. Phức tạp, đa dạng, không xuất hiện các tầng lớp xã hội mới."],
        dap_an: "C",
        giai_thich: "Do nền kinh tế nhiều thành phần, cơ cấu xã hội - giai cấp mang tính chất phức tạp, đa dạng và làm xuất hiện các tầng lớp xã hội mới."
    },
    {
        cau: "Câu 40: (CLO5.3). Lực lượng nào giữ vai trò chủ đạo, tiên phong trong cơ cấu xã hội – giai cấp thời kỳ quá độ lên CNXH?",
        options: ["A. Đội ngũ trí thức.", "B. Đội ngũ doanh nhân.", "C. Giai cấp nông dân.", "D. Giai cấp công nhân."],
        dap_an: "D",
        giai_thich: "Giai cấp công nhân là lực lượng giữ vai trò chủ đạo, tiên phong trong cơ cấu xã hội - giai cấp, lãnh đạo thông qua Đảng Cộng sản."
    },
    {
        cau: "Câu 41: (CLO5.3). Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, sự biến đổi cơ cấu xã hội - giai cấp vừa đảm bảo nhân tố nào?",
        options: ["A. Vừa tập hợp lực lượng, vừa thực hiện nhu cầu và lợi ích chung.", "B. Thực hiện công hữu tất cả tư liêu sản xuất.", "C. Chỉ đơn thuần là thủ tiêu giai cấp tư sản.", "D. Vừa đảm bảo tính qui luật phổ biến, vừa mang tính đặc thù của xã hội Việt Nam."],
        dap_an: "D",
        giai_thich: "Sự biến đổi cơ cấu xã hội - giai cấp ở Việt Nam tuân theo quy luật chung của CNXHKH nhưng cũng mang tính đặc thù của một nước nông nghiệp tiến lên CNXH bỏ qua TBCN."
    },
    {
        cau: "Câu 42: (CLO5.3). Một trong những đặc điểm nổi bật của cơ cấu xã hội – giai cấp trong thời kỳ quá độ lên CNXH ở Việt Nam:",
        options: ["A. Biến đổi cơ cấu - xã hội chi phối những biến đổi của cơ cấu kinh tế trong TKQĐ lên CNXH ở Việt Nam.", "B. Biến đổi phức tạp, đa dạng không tuân theo quy luật của xã hội Việt Nam.", "C. Biến đổi vừa đảm bảo tính quy luật, vừa mang tính đặc thù của xã hội Việt Nam.", "D. Biến đổi có tính chất cơ hội và tạm thời theo yêu cầu của từng giai đoạn cách mạng."],
        dap_an: "C",
        giai_thich: "Đặc điểm nổi bật là sự biến đổi này vừa đảm bảo tính quy luật phổ biến, vừa mang tính đặc thù do điều kiện lịch sử của Việt Nam."
    },
    {
        cau: "Câu 43: (CLO5.3). Liên minh công nhân – nông dân – trí thức được xem là?",
        options: ["A. Hạt nhân của khối đại đoàn kết toàn dân tộc và là động lực của sự nghiệp công nghiệp hóa, hiện đại hóa.", "B. Nền tảng của khối đại đoàn kết toàn dân tộc và là động lực của sự nghiệp công nghiệp hóa, hiện đại hóa.", "C. Nền tảng của khối đại đoàn kết toàn dân tộc và là cơ sở để phát triển xã hội.", "D. Nền tảng của khối đại đoàn kết toàn dân tộc và là mục tiêu của quá trình xây dựng chủ nghĩa xã hội."],
        dap_an: "B",
        giai_thich: "Khối liên minh này được coi là nền tảng vững chắc của khối đại đoàn kết toàn dân tộc, đồng thời là động lực to lớn cho sự nghiệp xây dựng và bảo vệ Tổ quốc."
    },
    {
        cau: "Câu 44: (CLO5.3). Trong thời kỳ quá độ lên CNXH, đội ngũ nào có động góp tích cực vào việc thực hiện chiến lược phát triển kinh tế – xã hội, giải quyết việc làm cho người lao động?",
        options: ["A. Giai cấp công nhân.", "B. Đội ngũ thanh niên.", "C. Đội ngũ trí thức.", "D. Đội ngũ doanh nhân."],
        dap_an: "D",
        giai_thich: "Đội ngũ doanh nhân là lực lượng chủ thể trong kinh tế thị trường, đóng vai trò quan trọng trong phát triển kinh tế và giải quyết việc làm."
    },
    {
        cau: "Câu 45: (CLO5.3). Trong thời kỳ quá độ lên CNXH ở Việt Nam, để tạo môi trường và điều kiện thúc đẩy biến đổi cơ cấu xã hội – giai cấp theo hướng tích cực cần phải làm gì?",
        options: ["A. Đẩy mạnh công nghiệp hóa, hiện đại hóa; giải quyết tốt mối quan hệ tăng trưởng kinh tế với đảm bảo công bằng xã hội.", "B. Tăng trưởng kinh tế phải gắn với phát triển văn hóa.", "C. Quan tâm thích đáng và phù hợp với mỗi giai cấp, tầng lớp trong xã hội.", "D. Cải thiện đời sống tinh thần cho nhân dân."],
        dap_an: "A",
        giai_thich: "Giải pháp cốt lõi là đẩy mạnh CNH, HĐH và giải quyết tốt mối quan hệ giữa tăng trưởng kinh tế với đảm bảo công bằng xã hội."
    },
    {
        cau: "Câu 46: (CLO5.3). Chính sách của Đảng, Nhà nước phát huy vai trò của thế hệ trẻ trong sự nghiệp xây dựng và bảo vệ Tổ quốc nhằm mục tiêu gì?",
        options: ["A. Tạo môi trường và điều kiện thuận lợi cho họ học tập, nghiên cứu, lao động giải trí, phát triển trí tuệ, kỹ năng, thể lực.", "B. Đảm bảo việc làm, nâng cao thu nhập, cải thiện điều kiện làm việc, nhà ở.", "C. Khuyến khích chuyển dịch cơ cấu lao động, tiếp nhận và ứng dụng tiến bộ khoa học – công nghệ.", "D. Đào tạo nhân tài."],
        dap_an: "A",
        giai_thich: "Chính sách đối với thanh niên nhằm tạo môi trường thuận lợi để họ học tập, nghiên cứu, phát triển trí tuệ, kỹ năng, thể lực."
    },
    {
        cau: "Câu 47: (CLO5.3). Trong tiến trình đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế, đội ngũ trí thức có vai trò như thế nào?",
        options: ["A. Là lực lượng đi đầu.", "B. Là lực lượng giữ vị trí tiên phong.", "C. Là lực lượng lao động sáng tạo đặc biệt quan trọng.", "D. Là lực lượng đối đầu với giai cấp công nhân."],
        dap_an: "C",
        giai_thich: "Đội ngũ trí thức là lực lượng lao động sáng tạo đặc biệt quan trọng trong phát triển kinh tế tri thức và CNH, HĐH."
    },
    {
        cau: "Câu 48: (CLO5.1). Dưới góc độ chính trị - xã hội, môn chủ nghĩa xã hội khoa học tập trung nghiên cứu cơ cấu xã hội nào?",
        options: ["A. Cơ cấu xã hội - dân cư.", "B. Cơ cấu xã hội - giai cấp.", "C. Cơ cấu xã hội - nghề nghiệp.", "D. Cơ cấu xã hội - tôn giáo."],
        dap_an: "B",
        giai_thich: "Chủ nghĩa xã hội khoa học là khoa học chính trị - xã hội, nên tập trung nghiên cứu Cơ cấu xã hội - giai cấp."
    },
    {
        cau: "Câu 49: (CLO5.1). Khái niệm nào dùng để chỉ hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan, hoạt động hợp pháp trong một chế độ xã hội nhất định?",
        options: ["A. Cơ cấu xã hội - dân cư.", "B. Cơ cấu xã hội - giai cấp.", "C. Cơ cấu xã hội - nghề nghiệp.", "D. Cơ cấu xã hội - tôn giáo."],
        dap_an: "B",
        giai_thich: "Khái niệm này là định nghĩa về Cơ cấu xã hội - giai cấp."
    },
    {
        cau: "Câu 50: (CLO5.3). Nội dung nào KHÔNG là nguyên nhân để khẳng định cơ cấu xã hội – giai cấp có vị trí quan trọng hàng đầu, chi phối các loại hình xã hội khác trong hệ thống xã hội?",
        options: ["A. Cơ cấu xã hội – giai cấp liên quan đến các đảng phái chính trị và nhà nước.", "B. Liên quan đến quyền sở hữu tư liệu sản xuất, tổ chức lao động, vấn đề phân phối thu nhập… trong hệ thống sản xuất nhất định.", "C. Những biến đổi của cơ cấu xã hội – giai cấp tất yếu sẽ ảnh hưởng đến sự biến đổi của các cơ cấu xã hội khác.", "D. Các giai cấp và tầng lớp trong xã hội có vị trí, vai trò khác nhau và không có điểm chung để liên hệ gắn bó với nhau."],
        dap_an: "D",
        giai_thich: "Các lý do A, B, C đều khẳng định vị trí quan trọng. Trong thời kỳ quá độ, các giai cấp, tầng lớp phải cùng chung sức và có lợi ích chung để xây dựng CNXH, nên đáp án D là sai về bản chất."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 17 ---
const de17 = [
    {
        cau: "Câu 1: (CLO6.1) Không có lãnh thổ thì không có khái niệm nào dưới đây?",
        options: ["A. Khái niệm Tổ quốc, quốc gia", "B. Khái niệm tài nguyên", "C. Khái niệm động tộc", "D. Khái niệm tôn giáo"],
        dap_an: "A",
        giai_thich: "Lãnh thổ là một trong những đặc trưng cơ bản và tiên quyết để hình thành khái niệm quốc gia, Tổ quốc."
    },
    {
        cau: "Câu 2: (CLO6.1) Nước ta đạo nào chiếm giáo dân nhiều nhất?",
        options: ["A. Phật giáo", "B. Tin lành", "C. Công giáo", "D. Hồi giáo"],
        dap_an: "A",
        giai_thich: "Ở Việt Nam, Phật giáo là tôn giáo có số lượng tín đồ, ảnh hưởng lớn nhất."
    },
    {
        cau: "Câu 3: (CLO6.1) Nội dung cương lĩnh dân tộc của chủ nghĩa Mác - Lênin là?",
        options: ["A. Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc lại", "B. Các dân tộc đoàn kết, bình đẳng", "C. Các dân tộc có quyền tự quyết", "D. Các dân tộc liên hiệp công nhân các nước"],
        dap_an: "A",
        giai_thich: "Cương lĩnh dân tộc Mác - Lênin bao gồm ba nội dung: Bình đẳng, Tự quyết, và Liên hiệp công nhân các dân tộc lại."
    },
    {
        cau: "Câu 4: (CLO6.1) Tác phẩm: “Về quyền dân tộc tự quyết” là của ai?",
        options: ["A. C.Mác", "B. C.Mác & Ph.Ăng ghen", "C. V.I.Lênin", "D. Stalin"],
        dap_an: "C",
        giai_thich: "Tác phẩm \"Về quyền dân tộc tự quyết\" là một luận điểm phát triển quan trọng của V.I.Lênin về vấn đề dân tộc trong thời kỳ đế quốc chủ nghĩa."
    },
    {
        cau: "Câu 5: (CLO6.1) Đặc điểm nào sau đây thuộc về chủng tộc?",
        options: ["A. Cùng cư trú trên một khu vực địa lý", "B. Cùng một sở thích nhất định", "C. Cùng một tính chất về mặt sinh học", "D. Cùng một quốc gia, dân tộc"],
        dap_an: "C",
        giai_thich: "Chủng tộc là cộng đồng người có chung các đặc điểm di truyền về tính chất sinh học (màu da, hình dáng cơ thể, v.v.)."
    },
    {
        cau: "Câu 6: (CLO6.1) Tính chất của dân tộc được quy định bởi?",
        options: ["A. Phương thức sản xuất thống trị trong dân tộc, giai cấp lãnh đạo xã hội và dân tộc", "B. Giai cấp lãnh đạo xã hội và dân tộc, xu thế của thời đại", "C. Xu thế của thời đại", "D. Đặc điểm ngôn ngữ, văn hoá"],
        dap_an: "A",
        giai_thich: "Tính chất của một dân tộc luôn bị quy định bởi cơ sở hạ tầng, tức phương thức sản xuất thống trị, và hệ tư tưởng của giai cấp lãnh đạo."
    },
    {
        cau: "Câu 7: (CLO6.1) Theo chủ nghĩa Mác – Lênin, dân tộc là quá trình phát triển lâu dài của xã hội loài người, trải qua các hình thức cộng đồng từ?",
        options: ["A. Thấp đến cao", "B. Đơn giản đến phức tạp", "C. Chưa hoàn thiện đến hoàn thiện", "D. Cao xuống thấp"],
        dap_an: "A",
        giai_thich: "Quá trình phát triển các hình thức cộng đồng người theo Chủ nghĩa Mác – Lênin đi theo hướng biện chứng từ thấp đến cao (Thị tộc, Bộ lạc, Bộ tộc, Dân tộc)."
    },
    {
        cau: "Câu 8: (CLO6.1) Theo chủ nghĩa Mác – Lênin, sự biến đổi của phương thức sản xuất là nguyên nhân quyết định sự biến đổi của yếu tố nào?",
        options: ["A. Cộng đồng dân tộc", "B. Lực lượng sản xuất", "C. Quan hệ sản xuất", "D. Xã hội"],
        dap_an: "A",
        giai_thich: "Phương thức sản xuất là yếu tố căn bản của tồn tại xã hội, quyết định sự biến đổi của toàn bộ các hình thái ý thức và cơ cấu xã hội, bao gồm cộng đồng dân tộc."
    },
    {
        cau: "Câu 9: (CLO6.1) Trong các mối liên hệ cộng đồng sau đây, hình thức liên hệ nào là quan trọng nhất quy định đặc trưng của cộng đồng dân tộc?",
        options: ["A. Cộng đồng lãnh thổ", "B. Cộng đồng kinh tế, văn hóa", "C. Cộng đồng ngôn ngữ", "D. Cộng đồng văn hóa, ngôn ngữ"],
        dap_an: "B",
        giai_thich: "Cộng đồng kinh tế (sinh hoạt kinh tế chung) là yếu tố căn bản nhất, là nền tảng vững chắc để các cộng đồng dân tộc tồn tại và phát triển ổn định."
    },
    {
        cau: "Câu 10: (CLO6.1) Đặc trưng nào dễ biến động nhất trong các đặc trưng của dân tộc?",
        options: ["A. Sinh hoạt kinh tế", "B. Lãnh thổ", "C. Ngôn ngữ", "D. Văn hóa và cấu tạo tâm lý"],
        dap_an: "A",
        giai_thich: "Trong thời kỳ quá độ lên CNXH, Sinh hoạt kinh tế (cơ cấu kinh tế, phương thức sản xuất) là yếu tố biến đổi nhanh chóng, phức tạp nhất, chi phối các yếu tố khác."
    },
    {
        cau: "Câu 11: (CLO6.1) Lịch sử diễn ra một cách phức tạp là do?",
        options: ["A. Bị tác động bởi quy luật lợi ích, đặc thù truyền thống văn hoá của mỗi quốc gia dân tộc", "B. Bị chi phối với quy luật chung của xã hội", "C. Bị chi phối bởi đặc thù truyền thống văn hoá của mỗi quốc gia dân tộc", "D. Bị chi phối với quy luật chung của tự nhiên"],
        dap_an: "A",
        giai_thich: "Lịch sử xã hội là tổng hòa của các quy luật chung và các yếu tố chủ quan như lợi ích, truyền thống văn hóa, khiến quá trình phát triển trở nên phức tạp."
    },
    {
        cau: "Câu 12: (CLO6.1) Thực chất của lịch sử xã hội loài người là?",
        options: ["A. Lịch sử đấu tranh giai cấp", "B. Lịch sử của văn hoá", "C. Lịch sử của sản xuất vật chất", "D. Lịch sử của tôn giáo"],
        dap_an: "C",
        giai_thich: "Theo Chủ nghĩa Mác – Lênin, lịch sử xã hội loài người trước hết là lịch sử của sản xuất vật chất, vì sản xuất vật chất quyết định sự tồn tại và phát triển của xã hội."
    },
    {
        cau: "Câu 13: (CLO6.1) Vai trò của yếu tố dân tộc trong cuộc đấu tranh giai cấp?",
        options: ["A. Dân tộc là địa bàn diễn ra cuộc đấu tranh giai cấp, là cơ sở, là nguồn tạo nên sức mạnh giai cấp", "B. Đấu tranh dân tộc quyết định xu hướng của đấu tranh giai cấp", "C. Dân tộc là cơ sở, là nguồn tạo nên sức mạnh giai cấp", "D. Đấu tranh giai cấp quyết định xu hướng đấu tranh dân tộc"],
        dap_an: "A",
        giai_thich: "Dân tộc là hình thức cộng đồng bao hàm đấu tranh giai cấp, là địa bàn và là nguồn tạo nên sức mạnh cho giai cấp."
    },
    {
        cau: "Câu 14: (CLO6.1) Trong thời đại ngày nay, thực chất của vấn đề dân tộc là gì?",
        options: ["A. Kinh tế", "B. Chính trị", "C. Văn hóa", "D. Xã hội"],
        dap_an: "B",
        giai_thich: "Trong thời đại quá độ, vấn đề dân tộc luôn gắn chặt với việc giành và bảo vệ chính trị (độc lập dân tộc, chế độ chính trị - xã hội)."
    },
    {
        cau: "Câu 15: (CLO6.2) Tôn giáo có các nguồn gốc là?",
        options: ["A. Nguồn gốc xã hội, tâm lý, nhận thức", "B. Nguồn gốc tâm lý và giai cấp", "C. Nguồn gốc giai cấp", "D. Nguồn gốc tự nhiên"],
        dap_an: "A",
        giai_thich: "Các giáo trình Mác - Lênin thường phân tích nguồn gốc của tôn giáo bao gồm: nguồn gốc xã hội (kinh tế-xã hội/tự nhiên), nguồn gốc nhận thức, và nguồn gốc tâm lý."
    },
    {
        cau: "Câu 16: (CLO6.2) Nước ta có bao nhiêu dân tộc cùng nhau chung sống?",
        options: ["A. 49", "B. 52", "C. 54", "D. 56"],
        dap_an: "C",
        giai_thich: "Việt Nam là quốc gia đa dân tộc với 54 dân tộc."
    },
    {
        cau: "Câu 17: (CLO6.2) Đặc trưng chủ yếu của ý thức tôn giáo?",
        options: ["A. Sự phản kháng đối với bất công xã hội", "B. Niềm tin vào sự tồn tại của các đấng siêu nhiên thần thánh", "C. Khát vọng được giải thoát", "D. Phản ánh không đúng hiện thực khách quan"],
        dap_an: "B",
        giai_thich: "Đặc trưng cơ bản, cốt lõi của tôn giáo là niềm tin vào sự tồn tại của các đấng siêu nhiên, thần thánh."
    },
    {
        cau: "Câu 18: (CLO6.2) Định nghĩa kinh điển về tôn giáo của Ph. Ăngghen: “Bất cứ tôn giáo nào cũng chỉ là sự phản ánh hư ảo vào đầu óc con người ta sức mạnh ở bên ngoài chi phối cuộc sống hàng ngày của họ; chỉ là sự phản ánh mà trong đó những sức mạnh ở trên thế gian đã mang sức mạnh siêu thế gian” được viết trong tác phẩm nào?",
        options: ["A. Chống Đuy-Rinh", "B. Biện chứng của tự nhiên", "C. Những bức thư duy vật lịch sử", "D. Biện chứng của tự nhiên"],
        dap_an: "D",
        giai_thich: "Luận điểm nổi tiếng này của Ph. Ăngghen nằm trong tác phẩm Biện chứng của tự nhiên."
    },
    {
        cau: "Câu 19: (CLO6.2) Tiêu chí cơ bản để phân biệt sự khác nhau giữa các dân tộc?",
        options: ["A. Địa bàn cư trú của dân tộc", "B. Trình độ phát triển của dân tộc", "C. Bản sắc văn hoá của dân tộc", "D. Tư tưởng của dân tộc"],
        dap_an: "C",
        giai_thich: "Sự khác biệt giữa các dân tộc/tộc người chủ yếu được biểu hiện qua bản sắc văn hoá, lối sống, phong tục."
    },
    {
        cau: "Câu 20: (CLO6.2) Khoa học khác với tôn giáo trên các mặt nào sau đây?",
        options: ["A. Về cơ sở, tính chất của phản ánh hiện thực", "B. Về tính chất của phản ánh tự nhiên", "C. Về nguồn gốc phát sinh", "D. Về bản chất phát sinh"],
        dap_an: "A",
        giai_thich: "Khoa học và tôn giáo khác nhau về cơ sở (tri thức kiểm chứng vs. niềm tin) và tính chất phản ánh hiện thực (khách quan, duy vật vs. hoang đường, hư ảo)."
    },
    {
        cau: "Câu 21: (CLO6.2) Quyền dân tộc tự quyết là quyền làm chủ của mỗi dân tộc đối với vận mệnh dân tộc mình, quyền tự quyết định chế độ chính trị – xã hội và con đường phát triển của ai?",
        options: ["A. Các dân tộc", "B. Dân tộc mình", "C. Quốc gia", "D. Các nước"],
        dap_an: "B",
        giai_thich: "Quyền tự quyết thuộc về mỗi Dân tộc mình."
    },
    {
        cau: "Câu 22: (CLO6.2) Trong các nội dung của quyền dân tộc tự quyết thì nội dung nào được coi là cơ bản nhất, tiên quyết nhất?",
        options: ["A. Tự quyết về chính trị", "B. Tự quyết về kinh tế", "C. Tự quyết về văn hoá", "D. Tự quyết về lãnh thổ"],
        dap_an: "A",
        giai_thich: "Quyền Tự quyết về chính trị (quyền ly khai hay liên hiệp) là nội dung tiên quyết, cơ bản nhất."
    },
    {
        cau: "Câu 23: (CLO6.2) Trong một quốc gia đa tộc người thì vấn đề gì cần giải quyết được coi là có ý nghĩa cơ bản nhất để thực hiện quyền bình đẳng giữa các dân tộc?",
        options: ["A. Ban hành hệ thống hiến pháp và pháp luật về quyền bình đẳng giữa các dân tộc", "B. Chống tư tưởng phân biệt chủng tộc, kì thị và chia rẽ dân tộc", "C. Nâng cao trình độ dân trí, văn hoá cho đồng bào", "D. Xoá bỏ dần sự chênh lệch về mọi mặt giữa các dân tộc do lịch sử để lại"],
        dap_an: "D",
        giai_thich: "Bình đẳng dân tộc thực sự phải là bình đẳng về kinh tế, văn hóa, xã hội. Do đó, cần xóa bỏ dần sự chênh lệch về mọi mặt giữa các dân tộc do lịch sử để lại."
    },
    {
        cau: "Câu 24: (CLO6.2) Đặc trưng nổi bật trong quan hệ giữa các dân tộc ở nước ta là?",
        options: ["A. Là sự phân bố đan xen nhau, không một dân tộc nào có lãnh thổ riêng", "B. Là sự cố kết dân tộc, hoà hợp dân tộc trong một cộng đồng đa dạng nhưng thống nhất", "C. Là có sự chênh lệch về trình độ phát triển kinh tế - xã hội giữa các dân tộc", "D. Là các dân tộc có bản sắc văn hoá riêng, đa dạng, phong phú"],
        dap_an: "B",
        giai_thich: "Đặc trưng nổi bật của quan hệ dân tộc ở Việt Nam là sự cố kết, hòa hợp dân tộc trên nguyên tắc thống nhất trong đa dạng."
    },
    {
        cau: "Câu 25: (CLO6.3) Tăng cường mối quan hệ tốt đẹp giữa dân tộc và tôn giáo tạo sự đồng thuận, đoàn kết dân tộc, đoàn kết tôn giáo nhằm xây dựng một nước Việt Nam?",
        options: ["A. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "B. Dân giàu, nước mạnh, văn minh", "C. Công bằng, dân chủ,", "D. Phồn thịnh"],
        dap_an: "A",
        giai_thich: "Mục tiêu tổng quát của Đảng và Nhà nước là xây dựng nước Việt Nam Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
        cau: "Câu 26: (CLO6.2) Để tăng cường, củng cố khối đại đoàn kết dân tộc ở nước ta hiện nay thì chính sách cụ thể nào của Đảng và Nhà nước ta được coi là vấn đề cực kỳ quan trọng?",
        options: ["A. Tôn trọng lợi ích, truyền thống, văn hoá của các dân tộc", "B. Phát huy truyền thống đoàn kết giữa các dân tộc", "C. Phát triển kinh tế hàng hoá ở các vùng dân tộc thiểu số", "D. Tăng cường bồi dưỡng, đào tạo đội ngũ cán bộ là người dân tộc thiểu số"],
        dap_an: "C",
        giai_thich: "Biện pháp cốt lõi để thực hiện bình đẳng và củng cố đoàn kết dân tộc là phát triển kinh tế nhằm xóa bỏ khoảng cách chênh lệch về mức sống giữa các vùng dân tộc."
    },
    {
        cau: "Câu 27: (CLO6.2) Quan điểm Đảng Cộng sản Việt Nam về vị trí của vấn đề dân tộc?",
        options: ["A. Vấn đề dân tộc chỉ là tạm thời trong sự nghiệp phát triển kinh tế - xã hội ở nước ta hiện nay", "B. Vấn đề dân tộc và đoàn kết dân tộc là vấn đề chiến lược cơ bản, lâu dài, đồng thời cũng là vấn đề cấp bách hiện nay của cách mạng Việt Nam.", "C. Vấn đề dân tộc chưa phải là vấn đề chiến lược cách mạng.", "D. Vấn đề dân tộc không phải là vấn đề cấp bách"],
        dap_an: "B",
        giai_thich: "Vấn đề dân tộc và đoàn kết dân tộc là vấn đề chiến lược cơ bản, lâu dài, đồng thời là vấn đề cấp bách của cách mạng Việt Nam."
    },
    {
        cau: "Câu 28: (CLO6.2) Cơ sở tồn tại của tôn giáo là gì?",
        options: ["A. Nhận thức của con người đối với thế giới khách quan", "B. Niềm tin của con người", "C. Sự tưởng tượng của con người", "D. Tồn tại xã hội"],
        dap_an: "D",
        giai_thich: "Tôn giáo là một hình thái ý thức xã hội và do đó Tồn tại xã hội (cơ sở vật chất, kinh tế) là cơ sở quyết định sự ra đời và tồn tại của nó."
    },
    {
        cau: "Câu 29: (CLO6.2) Thực chất của việc giải quyết vấn đề dân tộc là gì?",
        options: ["A. Là ý nghĩa chiến lược của cách mạng xã hội chủ nghĩa", "B. Là ý nghĩa quyết định đến sự ổn định, phát triển hay khủng hoảng, tan ra của một quốc gia dân tộc", "C. Xác lập mối quan hệ công bằng, bình đẳng giữa các dân tộc trong một quốc gia, giữa các quốc gia dân tộc trên các lĩnh vực kinh tế, chính trị, văn hoá, xã hội", "D. Là vấn đề cơ bản của cách mạng xã hội chủ nghĩa"],
        dap_an: "C",
        giai_thich: "Thực chất của việc giải quyết vấn đề dân tộc là xác lập mối quan hệ công bằng, bình đẳng về mọi mặt giữa các dân tộc."
    },
    {
        cau: "Câu 30: (CLO6.3) Đâu không phải là nguồn gốc kinh tế - xã hội của tôn giáo?",
        options: ["A. Trình độ phát triển của lực lượng sản xuất", "B. Do sự bần cùng về kinh tế, áp bức về chính trị của con người", "C. Do sự thất vọng, bất lực của con người trước những bất công xã hội", "D. Do bất động về ngôn ngữ"],
        dap_an: "D",
        giai_thich: "Bất đồng về ngôn ngữ không phải là nguồn gốc kinh tế - xã hội của tôn giáo; các nguồn gốc kinh tế - xã hội liên quan đến trình độ sản xuất, áp bức và bất công xã hội."
    },
    {
        cau: "Câu 31: (CLO6.3) Tôn giáo là một phạm trù lịch sử, bởi vì?",
        options: ["A. Tôn giáo là sản phẩm của con người", "B. Tôn giáo là do điều kiện kinh tế - xã hội sinh ra", "C. Tôn giáo ra đời, tồn tại và biến đổi trong một giai đoạn lịch sử nhất định của loài người", "D. Tôn giáo sẽ tồn tại và phát triển cùng với sự phát triển của lịch sử loài người"],
        dap_an: "C",
        giai_thich: "Tính lịch sử của tôn giáo thể hiện qua sự hình thành, tồn tại và biến đổi của nó trong một giai đoạn lịch sử nhất định và sẽ tiêu vong khi nguyên nhân sinh ra nó không còn."
    },
    {
        cau: "Câu 32: (CLO6.3) Khi nào thì tôn giáo mang tính chính trị?",
        options: ["A. Phản ánh nguyện vọng của nhân dân", "B. Khi các cuộc chiến tranh tôn giáo nổ ra", "C. Khi các giai cấp thống trị đã lợi dụng và sử dụng tôn giáo để phục vụ lợi ích của mình", "D. Phản ánh nguyện vọng của dân tộc"],
        dap_an: "C",
        giai_thich: "Tôn giáo mang tính chính trị khi nó bị các giai cấp thống trị lợi dụng để phục vụ lợi ích giai cấp và mục đích chính trị."
    },
    {
        cau: "Câu 33: (CLO6.3) Theo Ban Tôn giáo Chính phủ, Việt Nam hiện nay có khoảng bao nhiêu tôn giáo và bao nhiêu tín đồ đăng kí hoạt động?",
        options: ["A. 6 tôn giáo với khoảng 30 triệu tín đồ", "B. 13 tôn giáo với khoảng 24 triệu tín đồ", "C. 6 tôn giáo với khoảng 15 triệu tín đồ", "D. 6 tôn giáo với khoảng 10 triệu tín đồ"],
        dap_an: "B",
        giai_thich: "(Đây là dữ kiện thực tế) . Lựa chọn B phản ánh số lượng tôn giáo và tín đồ được thống kê gần đây."
    },
    {
        cau: "Câu 34: (CLO6.3) Điền từ còn thiếu vào chỗ trống: “Tôn giáo là một hình thái ý thức – xã hội phản ánh một cách hoang đường, hư ảo…… khách quan”?",
        options: ["A. Thực tiễn", "B. Hiện thực", "C. Điều kiện", "D. Cuộc sống"],
        dap_an: "B",
        giai_thich: "Tôn giáo là sự phản ánh hoang đường, hư ảo hiện thực khách quan (những sức mạnh tự nhiên và xã hội chi phối con người)."
    },
    {
        cau: "Câu 35: (CLO6.3) Giữa chủ nghĩa Mác – Lênin và hệ tư tưởng tôn giáo khác nhau ở điểm nào?",
        options: ["A. Về thế giới quan", "B. Về nhân sinh quan", "C. Về con đường mưu cầu hạnh phúc cho nhân dân", "D. Về thế giới quan, nhân sinh quan và con đường mưu cầu hạnh phúc cho nhân dân"],
        dap_an: "D",
        giai_thich: "Chủ nghĩa Mác – Lênin và tôn giáo khác nhau về bản chất lý luận, bao gồm thế giới quan (duy vật vs. duy tâm), nhân sinh quan... và con đường mưu cầu hạnh phúc."
    },
    {
        cau: "Câu 36: (CLO6.3) Tính lịch sử của tôn giáo được thể hiện trong nội dung nào sau đây?",
        options: ["A. Tôn giáo tồn tại trong một giai đoạn lịch sử nhất định", "B. Tôn giáo vận động và phát triển trong giai đoạn tư duy và nhận thức con người chưa cao", "C. Tôn giáo chỉ tồn tại trong tư duy con người", "D. Tôn giáo có sự hình thành, tồn tại và phát triển trong những giai đoạn lịch sử nhất định, nó có khả năng biến đổi để thích nghi với nhiều chế độ chính trị - xã hội"],
        dap_an: "D",
        giai_thich: "Tính lịch sử không chỉ là sự tồn tại tạm thời mà còn là khả năng hình thành, tồn tại, phát triển và biến đổi để thích nghi qua các giai đoạn lịch sử khác nhau."
    },
    {
        cau: "Câu 37: (CLO6.3) Liên hiệp công - nông các dân tộc phản ánh sự thống nhất giữa?",
        options: ["A. Giải phóng dân tộc và giải phóng giai cấp", "B. Giải phóng xã hội và giải phóng giai cấp", "C. Giải phóng con người và giải phóng giai cấp", "D. Giải phóng lao động và giải phóng giai cấp"],
        dap_an: "A",
        giai_thich: "\"Các dân tộc\" chỉ mục tiêu Giải phóng dân tộc; \"công - nông\" chỉ mục tiêu Giải phóng giai cấp."
    },
    {
        cau: "Câu 38: (CLO6.3) Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin là cơ sở lý luận quan trọng để các Đảng Cộng sản vận dụng thực hiện chính sách dân tộc trong quá trình đấu tranh giành?",
        options: ["A. Độc lập dân tộc và xây dựng chủ nghĩa tư bản", "B. Độc lập dân tộc và giải phóng xã hội", "C. Độc lập dân tộc và xây dựng chủ nghĩa xã hội", "D. Độc lập dân tộc và xây dựng xã hội mới"],
        dap_an: "C",
        giai_thich: "Mục tiêu chiến lược của cách mạng vô sản là giành Độc lập dân tộc và tiến lên xây dựng chủ nghĩa xã hội."
    },
    {
        cau: "Câu 39: (CLO6.3) Yếu tố nào sau đây là nhân tố quyết định sự tồn tại và phát triển của các hình thái ý thức xã hội, trong đó có tôn giáo?",
        options: ["A. Đấu tranh giai cấp", "B. Sản xuất vật chất và các quan hệ kinh tế", "C. Sự mâu thuẫn của các quan hệ xã hội", "D. Quá trình đấu tranh giữa các lực lượng trong xã hội"],
        dap_an: "B",
        giai_thich: "Sản xuất vật chất và các quan hệ kinh tế (tức tồn tại xã hội) là nhân tố quyết định các hình thái ý thức xã hội, bao gồm cả tôn giáo."
    },
    {
        cau: "Câu 40: (CLO6.3) Điền từ còn thiếu vào chỗ trống: Đảng và Nhà nước ta luôn quan tâm đến chính sách dân tộc, xem đó là vấn đề chính trị - xã hội rộng lớn và toàn diện gắn liền với các mục tiêu trong thời kỳ quá độ lên?",
        options: ["A. Xã hội phong kiến", "B. Xã hội nô lệ", "C. Xã hội phong kiến", "D. Chủ nghĩa xã hội"],
        dap_an: "D",
        giai_thich: "Chính sách dân tộc là bộ phận của đường lối xây dựng Chủ nghĩa xã hội."
    },
    {
        cau: "Câu 41: (CLO6.3) Đảng và Nhà nước xác định nội dung cốt lõi của công tác tôn giáo là gì?",
        options: ["A. Vận động quần chúng", "B. Vấn đề truyền đạo và theo đạo", "C. Trách nhiệm công dân", "D. Tinh thần dân tộc"],
        dap_an: "A",
        giai_thich: "Nội dung cốt lõi của công tác tôn giáo là công tác Vận động quần chúng tín đồ thực hiện tốt quyền và nghĩa vụ công dân."
    },
    {
        cau: "Câu 42: (CLO6.3) Chính sách dân tộc cơ bản của Đảng và Nhà nước ta được thể hiện trên những lĩnh vực nào?",
        options: ["A. Chính trị, kinh tế, văn hóa, tôn giáo", "B. Chính trị, kinh tế, văn hóa, xã hội, an ninh quốc phòng", "C. Chính trị, kinh tế, xã hội", "D. Chính trị, kinh tế, an ninh quốc phòng, giáo dục, y tế"],
        dap_an: "B",
        giai_thich: "Chính sách dân tộc phải được triển khai toàn diện trên mọi lĩnh vực, bao gồm chính trị, kinh tế, văn hóa, xã hội, an ninh quốc phòng."
    },
    {
        cau: "Câu 43: (CLO6.3) Các loại hình tín ngưỡng hiện nay bao gồm?",
        options: ["A. Thờ cúng tổ tiên", "B. Thờ anh hùng dân tộc", "C. Thờ Mẫu", "D. Thờ cúng tổ tiên, thờ anh hùng dân tộc, thờ Mẫu"],
        dap_an: "D",
        giai_thich: "Các loại hình tín ngưỡng phổ biến ở Việt Nam bao gồm Thờ cúng tổ tiên, thờ anh hùng dân tộc và thờ Mẫu."
    },
    {
        cau: "Câu 44: (CLO6.3) Chọn đáp án đúng: “Là niềm tin của con người vào các lực lượng siêu nhiên, thần thánh đến mức độ mê muội, cuồng tín, dẫn đến những hành vi cực đoan, sai lệch quá mức, trái với các giá trị văn hóa, pháp luật gây tổn hại cho cá nhân, xã hội và cộng đồng”?",
        options: ["A. Mê tín", "B. Mê tín dị đoan", "C. Khoa học", "D. Tôn giáo"],
        dap_an: "B",
        giai_thich: "Đây là định nghĩa về Mê tín dị đoan, hành vi trái với chuẩn mực xã hội và pháp luật."
    },
    {
        cau: "Câu 45: (CLO6.3) Tôn trọng tự do tín ngưỡng tôn giáo cũng chính là tôn trọng quyền con người, thể hiện bản chất ưu việt của chế độ?",
        options: ["A. Xã hội nguyên thủy", "B. Xã hội nô lệ", "C. Xã hội phong kiến", "D. Xã hội chủ nghĩa"],
        dap_an: "D",
        giai_thich: "Tôn trọng quyền con người và tự do tín ngưỡng là bản chất ưu việt của chế độ Xã hội chủ nghĩa."
    },
    {
        cau: "Câu 46: (CLO6.3) Theo quan điểm của chủ nghĩa Mác – Lênin, bản chất của tôn giáo được hiểu như thế nào?",
        options: ["A. Tôn giáo là một hiện tượng xã hội – văn hóa do con người sáng tạo ra", "B. Tôn giáo là hình ảnh chủ quan phản ánh thế giới khách quan", "C. Tôn giáo phản ánh văn hóa cộng đồng", "D. Tôn giáo phản ánh hoạt động sống của con người"],
        dap_an: "A",
        giai_thich: "Tôn giáo là một hiện tượng xã hội – văn hóa được hình thành trong quá trình lịch sử."
    },
    {
        cau: "Câu 47: (CLO6.3) Giải quyết mối quan hệ dân tộc và tôn giáo phải đặt trong mối quan hệ với cộng đồng quốc gia – dân tộc thống nhất theo định hướng nào?",
        options: ["A. Phong kiến", "B. Xã hội chủ nghĩa", "C. Tư bản chủ nghĩa", "D. Tư bản"],
        dap_an: "B",
        giai_thich: "Mọi chính sách về dân tộc và tôn giáo ở Việt Nam đều phải theo định hướng Xã hội chủ nghĩa."
    },
    {
        cau: "Câu 48: (CLO6.3) Trong các mối quan hệ xã hội thì quan hệ nào là những quan hệ hết sức nhạy cảm, quy định lẫn nhau?",
        options: ["A. Dân tộc, tôn giáo, xã hội", "B. Dân tộc, xã hội", "C. Dân tộc, tôn giáo và nhân quyền", "D. Dân tộc, nhân quyền"],
        dap_an: "C",
        giai_thich: "Ba vấn đề Dân tộc, Tôn giáo và Nhân quyền là những vấn đề hết sức nhạy cảm trong bối cảnh quốc tế hiện nay."
    },
    {
        cau: "Câu 49: (CLO6.3) Theo chủ nghĩa Mác - Lênin, sự phát triển các hình thức cộng đồng người được bắt đầu và kết thúc bởi?",
        options: ["A. Thị tộc, Dân tộc", "B. Bộ tộc, Thị tộc", "C. Thị tộc, Bộ lạc", "D. Thị tộc, Liên minh thị tộc"],
        dap_an: "A",
        giai_thich: "Lịch sử cộng đồng người bắt đầu từ Thị tộc và kết thúc ở Dân tộc (Quốc gia dân tộc)."
    },
    {
        cau: "Câu 50: (CLO6.3) Sự biến đổi của cộng đồng dân tộc là do biến đổi của yếu tố nào?",
        options: ["A. Lực lượng sản xuất", "B. Phương thức sản xuất", "C. Quan hệ sản xuất", "D. Xã hội"],
        dap_an: "B",
        giai_thich: "Sự biến đổi của các hình thức cộng đồng người (bao gồm dân tộc) bị quy định bởi sự biến đổi của Phương thức sản xuất."
    },
    {
        cau: "Câu 51: (CLO6.3) Ở phương Đông, dân tộc được hình thành trên cơ sở nào?",
        options: ["A. Một nền văn hóa phát triển", "B. Một nền văn hóa, tâm lý dân tộc đã phát triển", "C. Chính trị đã ổn định", "D. Nền kinh tế đang phát triển"],
        dap_an: "B",
        giai_thich: "Dân tộc phương Đông (cũ) hình thành sớm trên cơ sở liên kết về văn hóa, tâm lý dân tộc (tạo ra sự cố kết bền vững về huyết thống, truyền thống)."
    },
    {
        cau: "Câu 52: (CLO6.3) Ở phương Tây, dân tộc xuất hiện khi phương thức sản xuất tư bản chủ nghĩa được xác lập thay thế phương thức sản xuất nào?",
        options: ["A. Cộng sản nguyên thủy", "B. Chiếm hữu nô lệ", "C. Phong kiến", "D. Xã hội chủ nghĩa"],
        dap_an: "C",
        giai_thich: "Dân tộc phương Tây hình thành trong quá trình đấu tranh chống chế độ phong kiến và xác lập phương thức sản xuất tư bản chủ nghĩa."
    },
    {
        cau: "Câu 53: (CLO6.3) Khái niệm lãnh thổ của một quốc gia bao gồm?",
        options: ["A. Vùng đất, vùng biển, vùng trời", "C. Vùng đất, vùng biển, vùng trời, vùng sông hồ", "B. Vùng đất, vùng biển, vùng trời, vùng rừng núi", "D. Vùng đất, vùng biển, vùng trời, hải đảo"],
        dap_an: "D",
        giai_thich: "Lãnh thổ quốc gia bao gồm không gian đất liền, vùng biển, vùng trời và các yếu tố địa lý liên quan như hải đảo."
    },
    {
        cau: "Câu 54: (CLO6.3) Đối với các quốc gia có nhiều tộc người thì tính thống nhất trong đa dạng văn hóa là đặc trưng của?",
        options: ["A. Nền văn hóa dân tộc", "B. Nền kinh tế", "C. Nền giáo dục", "D. Văn hóa tộc người"],
        dap_an: "A",
        giai_thich: "Tính thống nhất trong đa dạng là đặc trưng cốt lõi của Nền văn hóa dân tộc ở các quốc gia đa tộc người."
    },
    {
        cau: "Câu 55: (CLO6.3) Về nguồn gốc nhận thức của tôn giáo, khi khoảng cách giữa “biết” và “chưa biết” vẫn tồn tại, những điều khoa học chưa giải thích được, thì điều đó thường được giải thích thông qua?",
        options: ["A. Lăng kính các tôn giáo", "B. Các đấng siêu nhiên", "C. Hoạt động mê tín", "D. Niềm tin cá nhân"],
        dap_an: "A",
        giai_thich: "Khi tri thức khoa học chưa giải thích được, con người thường tìm kiếm lời giải thông qua lăng kính các tôn giáo (tức là dựa trên niềm tin vào thần thánh)."
    },
    {
        cau: "Câu 56: (CLO6.3) Tôn trọng tự do tín ngưỡng thể hiện bản chất ưu việt của chế độ Xã hội chủ nghĩa là xuất phát từ việc?",
        options: ["A. Tôn trọng quyền tự do", "B. Tôn trọng quyền văn hóa", "C. Tôn trọng quyền sống", "D. Tôn trọng quyền con người"],
        dap_an: "D",
        giai_thich: "Tôn trọng tự do tín ngưỡng là sự thể hiện tôn trọng quyền con người (một trong những quyền cơ bản)."
    },
    {
        cau: "Câu 57: (CLO6.3) Trong xã hội công xã nguyên thủy, tín ngưỡng tôn giáo chỉ biểu hiện thuần túy về?",
        options: ["A. Kinh tế", "B. Chính trị", "C. Tư tưởng", "D. Văn hoá"],
        dap_an: "C",
        giai_thich: "Trong công xã nguyên thủy, tôn giáo mang tính chất sơ khai, chỉ biểu hiện thuần túy về tư tưởng (niềm tin, sự tưởng tượng) và chưa bị lợi dụng cho mục đích chính trị/giai cấp."
    },
    {
        cau: "Câu 58: (CLO6.2) Nghị quyết “Về phát huy sức mạnh đại đoàn kết dân tộc vì dân giàu nước mạnh, xã hội công bằng, dân chủ, văn minh” được đề cập đến ở Hội nghị Trung ương nào?",
        options: ["A. Hội nghị Trung ương II khoá VII", "B. Hội nghị Trung ương V khoá VIII", "C. Hội nghị Trung ương VI khoá VIII", "D. Hội nghị Trung ương VII khoá IX"],
        dap_an: "D",
        giai_thich: "(Đây là dữ kiện thực tế) . Nghị quyết quan trọng này về đại đoàn kết dân tộc được ban hành tại Hội nghị Trung ương VII khoá IX."
    }
];
// --- DỮ LIỆU ĐỀ SỐ 18 ---
const de18 = [
    {
        cau: "Câu 1: (CLO7.1) Khái niệm nào sau đây đúng?",
        options: ["A. Gia đình là một cộng đồng người đặc biệt, có vai trò quyết định đến sự tồn tại và phát triển của xã hội.", "B. Gia đình là một cộng đồng người, có vai trò quyết định đến sự tồn tại và phát triển của xã hội.", "C. Gia đình là một hình thức cộng đồng xã hội đặc biệt, được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng, cùng với những quy định về quyền và nghĩa vụ của các thành viên trong gia đình.", "D. Gia đình là một hình thái cộng đồng xã hội đặc biệt, được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng, cùng với những quy định về quyền và nghĩa vụ của các thành viên trong gia đình."],
        dap_an: "C",
        giai_thich: "Định nghĩa về gia đình bao gồm việc là một hình thức cộng đồng xã hội đặc biệt, được hình thành dựa trên cơ sở hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng, cùng với các quy định về quyền và nghĩa vụ."
    },
    {
        cau: "Câu 2: (CLO7.1) Theo C.Mác và Ph.Ăngghen, cơ sở hình thành gia đình bao gồm những mối quan hệ cơ bản nào?",
        options: ["A. Quan hệ nuôi dưỡng và quan hệ huyết thống.", "B. Quan hệ hôn nhân và quan hệ huyết thống.", "C. Quan hệ nuôi dưỡng và quan hệ hôn nhân.", "D. Quan hệ nuôi dưỡng, quan hệ hôn nhân và quan hệ huyết thống."],
        dap_an: "D",
        giai_thich: "Gia đình được hình thành trên cơ sở sự thống nhất của ba mối quan hệ cơ bản là hôn nhân, huyết thống và nuôi dưỡng. "
    },
    {
        cau: "Câu 3: (CLO7.1) Để hình thành nên các mối quan hệ khác trong gia đình cần có quan hệ cơ sở, nền tảng. Vậy, quan hệ nào sau đây là quan hệ nền tảng?",
        options: ["A. Quan hệ huyết thống", "B. Quan hệ nuôi dưỡng", "C. Quan hệ họ hàng", "D. Quan hệ hôn nhân"],
        dap_an: "D",
        giai_thich: "Quan hệ hôn nhân là quan hệ cơ sở, nền tảng, tạo ra sự liên kết pháp lý và đạo đức để từ đó phát sinh các mối quan hệ huyết thống và nuôi dưỡng. "
    },
    {
        cau: "Câu 4: (CLO7.1) Ngoài quan hệ huyết thống, hiện nay, tại Việt Nam cũng như trên thế giới còn thừa nhận quan hệ gia đình nào khác?",
        options: ["A. Người mang thai hộ và con mang thai hộ.", "B. Quan hệ cha mẹ nuôi – con nuôi.", "C. Quan hệ ông bà – cháu.", "D. Quan hệ dì, cậu, chú, bác – cháu."],
        dap_an: "B",
        giai_thich: "Bên cạnh quan hệ huyết thống, pháp luật và xã hội hiện đại thừa nhận quan hệ cha mẹ nuôi – con nuôi (quan hệ nuôi dưỡng) là quan hệ gia đình hợp pháp. "
    },
    {
        cau: "Câu 5: (CLO7.1) Quan hệ nào trong gia đình vừa thể hiện trách nhiệm, nghĩa vụ, vừa là một quyền lợi thiêng liêng giữa các thành viên trong gia đình?",
        options: ["A. Quan hệ huyết thống", "B. Quan hệ hôn nhân", "C. Quan hệ họ hàng", "D. Quan hệ nuôi dưỡng"],
        dap_an: "D",
        giai_thich: "Quan hệ nuôi dưỡng (chăm sóc, giáo dục) thể hiện rõ nhất trách nhiệm, nghĩa vụ của cha mẹ đối với con cái, đồng thời là quyền lợi thiêng liêng của cha mẹ. "
    },
    {
        cau: "Câu 6: (CLO7.3) Chức năng đặc thù của gia đình và không một cộng đồng nào có thể thay thế, đó là:",
        options: ["A. Tái sản xuất ra sản phẩm", "B. Tái sản xuất ra con người", "C. Tái sản xuất xã hội", "D. Tái sản xuất các giá trị tinh thần"],
        dap_an: "B",
        giai_thich: "Chức năng tái sản xuất ra con người (sinh sản và nuôi dưỡng thế hệ mới) là chức năng sinh học – xã hội đặc thù của gia đình, không một thiết chế xã hội nào có thể thay thế được. "
    },
    {
        cau: "Câu 7: (CLO7.1) Trong xã hội dựa trên chế độ tư hữu về tư liệu sản xuất thì quan hệ xã hội và quan hệ gia đình tất yếu sẽ dẫn đến điều gì?",
        options: ["A. Sự bình đẳng", "B. Sự ổn định", "C. Sự bất bình đẳng", "D. Sự tôn trọng và bảo vệ"],
        dap_an: "C",
        giai_thich: "Theo Chủ nghĩa Mác – Lênin, chế độ tư hữu là nguồn gốc sinh ra sự bất bình đẳng và áp bức xã hội, điều này tất yếu được phản ánh trong quan hệ gia đình. "
    },
    {
        cau: "Câu 8: (CLO7.1) Chức năng cơ bản và đặc thù của gia đình là gì?",
        options: ["A. Tái sản xuất ra sản phẩm", "B. Tái sản xuất ra con người", "C. Tái sản xuất xã hội, vì gia đình là tế bào của xã hội", "D. Tái sản xuất ra các giá trị văn hóa truyền thống"],
        dap_an: "B",
        giai_thich: "Chức năng tái sản xuất ra con người là chức năng cơ bản và đặc thù nhất của gia đình. "
    },
    {
        cau: "Câu 9: (CLO7.1) Yếu tố nào sau đây KHÔNG thuộc chế độ hôn nhân tiến bộ?",
        options: ["A. Hôn nhân tự nguyện", "B. Hôn nhân một vợ một chồng, vợ chồng bình đẳng", "C. Hôn nhân được đảm bảo về pháp lí", "D. Hôn nhân được sắp đặt bởi cha mẹ"],
        dap_an: "D",
        giai_thich: "Hôn nhân tiến bộ được xây dựng trên cơ sở tự nguyện, bình đẳng và được pháp luật bảo vệ. [cite_start]Hôn nhân được sắp đặt bởi cha mẹ là biểu hiện của chế độ hôn nhân lỗi thời, phong kiến. "
    },
    {
        cau: "Câu 10: (CLO7.1) Quy mô của gia đình Việt Nam đang thay đổi theo xu hướng nào sau đây?",
        options: ["A. Gia đình hai thế hệ - gia đình ba thế hệ", "B. Gia đình tứ đại đồng đường", "C. Gia đình nhiều thế hệ", "D. Gia đình hai thế hệ"],
        dap_an: "D",
        giai_thich: "Xu hướng phát triển chung của gia đình hiện đại... là thu nhỏ quy mô, phổ biến là gia đình hạt nhân (hai thế hệ). "
    },
    {
        cau: "Câu 11: (CLO7.1) Vì sao nói việc thực hiện chức năng tái sản xuất ra con người không chỉ là việc riêng của từng gia đình mà là vấn đề xã hội?",
        options: ["A. Xã hội có ảnh hưởng đến sự phát triển chung của gia đình", "B. Vì gia đình là tế bào của xã hội, gia đình có tốt thì xã hội mới hưng thịnh và phát triển", "C. Vì việc sản xuất ra con người là một hiện tượng xã hội đặc biệt", "D. Vì ảnh hưởng đến dân số quốc gia"],
        dap_an: "D",
        giai_thich: "Chức năng tái sản xuất ra con người liên quan đến việc duy trì và phát triển lực lượng sản xuất xã hội, ảnh hưởng trực tiếp đến dân số quốc gia (số lượng, chất lượng, cơ cấu) và chính sách xã hội. "
    },
    {
        cau: "Câu 12: (CLO7.1) Chức năng nào của gia đình có ảnh hưởng lâu dài và toàn diện đến cuộc đời của mỗi thành viên?",
        options: ["A. Chức năng kinh tế và tổ chức tiêu dùng", "B. Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình", "C. Chức năng tái sản xuất ra con người", "D. Chức năng nuôi dưỡng, giáo dục"],
        dap_an: "D",
        giai_thich: "Chức năng nuôi dưỡng, giáo dục là chức năng quan trọng nhất trong việc hình thành nhân cách, đạo đức, lối sống, có ảnh hưởng toàn diện và lâu dài nhất đến sự phát triển của cá nhân. "
    },
    {
        cau: "Câu 13: (CLO7.3) Hiện nay, người trẻ có xu hướng thích hưởng thụ, thích thể hiện bản thân. Điều này ảnh hưởng gì đến việc định hướng hôn nhân sau này?",
        options: ["A. Chọn lựa thiếu thận trọng trong tình yêu", "B. Yêu vật chất hơn tình yêu chân thành", "C. Dễ dẫn đến tan vỡ, thất vọng", "D. Mất phương hướng trong cuộc sống"],
        dap_an: "C",
        giai_thich: "Xu hướng thực dụng, thiếu sự chuẩn bị về tâm lý và kinh nghiệm sống có thể dẫn đến dễ tan vỡ, thất vọng trong hôn nhân, làm suy giảm hạnh phúc gia đình. "
    },
    {
        cau: "Câu 14: (CLO7.1) Ngoài việc giáo dục nhân cách để trẻ hình thành quan điểm giáo dục tốt, gia đình còn là nơi trẻ học được việc hoạch định tương lai cho bản thân, điều này phụ thuộc vào chức năng nào?",
        options: ["A. Chức năng kinh tế và tổ chức tiêu dùng", "B. Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình", "C. Chức năng tái sản xuất ra con người", "D. Chức năng nuôi dưỡng, giáo dục"],
        dap_an: "D",
        giai_thich: "Hoạch định tương lai, hình thành nhân cách và quan điểm sống là nội dung của Chức năng nuôi dưỡng, giáo dục. "
    },
    {
        cau: "Câu 15: (CLO7.1) Hôn nhân tự nguyện KHÔNG bao gồm yếu tố nào sau đây?",
        options: ["A. Xuất phát từ tình yêu giữa nam và nữ", "B. Không chấp nhận sự áp đặt của cha mẹ", "C. Không bác bỏ việc cha mẹ quan tâm giúp đỡ con cái có trách nhiệm trong việc kết hôn", "D. Không được li hôn khi không được sự đồng ý của cha mẹ"],
        dap_an: "D",
        giai_thich: "Hôn nhân tự nguyện bao gồm quyền tự do ly hôn theo pháp luật, không bị ràng buộc bởi sự đồng ý của cha mẹ hay bất kỳ ai. "
    },
    {
        cau: "Câu 16: (CLO7.2) Luật Hôn nhân và Gia đình ra đời là cơ sở để thực hiện điều gì trong chế độ hôn nhân tiến bộ?",
        options: ["A. Hôn nhân tự nguyện", "B. Hôn nhân một vợ một chồng, vợ chồng bình đẳng", "C. Hôn nhân được đảm bảo về mặt pháp lí", "D. Hôn nhân hiện đại"],
        dap_an: "C",
        giai_thich: "Luật Hôn nhân và Gia đình là cơ sở pháp lý cao nhất, đảm bảo tính hợp pháp và bảo vệ các nguyên tắc của chế độ hôn nhân tiến bộ (Hôn nhân được đảm bảo về mặt pháp lí). "
    },
    {
        cau: "Câu 17: (CLO7.2) Như thế nào được gọi là hôn nhân tiến bộ ?",
        options: ["A. Cưỡng ép trong hôn nhân.", "B. Tổ chức tảo hôn.", "C. Hôn nhân tự nguyện, tự do lựa chọn người kết hôn", "D. Mang thai hộ vì mục đích thương mại."],
        dap_an: "C",
        giai_thich: "Hôn nhân tiến bộ dựa trên nguyên tắc tự nguyện, tự do lựa chọn người kết hôn và bình đẳng. "
    },
    {
        cau: "Câu 18: (CLO7.2) Chức năng kinh tế và chức năng tiêu dùng tác động như thế nào đối với vai trò của người quản lí gia đình?",
        options: ["A. Đảm bảo nguồn sinh sống, đáp ứng nhu cầu vật chất, tinh thần của các thành viên trong gia đình", "B. Khả năng quản lí và chi tiêu của người quản lí gia đình", "C. Nền kinh tế quốc gia", "D. Bình ổn thị trường"],
        dap_an: "A",
        giai_thich: "Chức năng kinh tế của gia đình là tạo ra và phân phối thu nhập, nhằm đảm bảo nguồn sinh sống, đáp ứng nhu cầu vật chất, tinh thần của các thành viên. "
    },
    {
        cau: "Câu 19: (CLO7.2) Giáo dục gia đình hiện nay có bước phát triển so với giai đoạn cuối thế kỉ XX. Bước phát triển đó là gì?",
        options: ["A. Đầu tư thời gian và trí tuệ cho con", "B. Đầu tư tài chính cho giáo dục con cái", "C. Đầu tư của nhà nước cho giáo dục công lập", "D. Đầu tư của Chính phủ cho giáo dục công lập"],
        dap_an: "A",
        giai_thich: "Bước phát triển hiện nay là sự quan tâm sâu sắc hơn về chất lượng giáo dục, thể hiện qua việc đầu tư thời gian và trí tuệ (thay đổi phương pháp, sự đồng hành) cho con cái. "
    },
    {
        cau: "Câu 20: (CLO7.2) Gia đình là nơi để con cái trưởng thành, đồng thời còn là nơi lưu giữ điều gì?",
        options: ["A. Sự yêu thương", "B. Truyền thống văn hóa của dân tộc", "C. Hạnh phúc", "D. Sự chăm sóc"],
        dap_an: "B",
        giai_thich: "Gia đình thực hiện chức năng bảo tồn và phát huy các giá trị văn hóa, truyền thống, đặc biệt là truyền thống văn hóa của dân tộc. "
    },
    {
        cau: "Câu 21: (CLO7.2) Đạo đức con người không chỉ được hình thành ở trường học mà còn thể hiện được chức năng gì của gia đình?",
        options: ["A. Tái sản xuất con người", "B. Nuôi dưỡng, giáo dục", "C. Thỏa mãn nhu cầu tâm sinh lí, duy trì tình cảm gia đình", "D. Các chức năng khác"],
        dap_an: "B",
        giai_thich: "Việc hình thành đạo đức và nhân cách là nội dung chủ yếu của chức năng nuôi dưỡng, giáo dục. "
    },
    {
        cau: "Câu 22: (CLO7.2) Sự bất bình đẳng giữa nam và nữ, giữa vợ và chồng, sự nô dịch đối với phụ nữ được xem xét có nguồn gốc từ đâu?",
        options: ["A. Truyền thống", "B. Sự giao thoa văn hóa", "C. Chế độ tư hữu về tư liệu sản xuất", "D. Quan niệm Nho giáo"],
        dap_an: "C",
        giai_thich: "Theo Mác - Lênin, chế độ tư hữu về tư liệu sản xuất là nguồn gốc sâu xa nhất của mọi hình thức bất bình đẳng xã hội và áp bức, bao gồm cả sự nô dịch đối với phụ nữ. "
    },
    {
        cau: "Câu 23: (CLO7.2) Hôn nhân một vợ một chồng là kết quả tất yếu của hôn nhân xuất phát từ tình yêu bắt nguồn từ đâu?",
        options: ["A. Chế độ tư hữu", "B. Cơ sở của văn hóa và kinh tế", "C. Do bản chất của tình yêu là có thể chia sẻ được", "D. Do bản chất của tình yêu là không thể chia sẻ được"],
        dap_an: "D",
        giai_thich: "Hôn nhân một vợ một chồng dựa trên bản chất của tình yêu chân chính là sự gắn kết độc quyền, không thể chia sẻ được (tính độc tôn, chung thủy). "
    },
    {
        cau: "Câu 24: (CLO7.2) Gia đình được đánh giá là “tế bào của xã hội.” Chúng ta cần làm thế nào để “tế bào” ấy phát triển một cách tốt nhất?",
        options: ["A. Cần một nền giáo dục phát triển toàn diện", "B. Gia đình cần có nền tảng kiến thức tốt", "C. Gia đình, nhà trường và xã hội cần có sự phát triển đồng bộ, nền tảng và bền vững", "D. Cá nhân cần có ý thức trong việc tự giáo dục"],
        dap_an: "C",
        giai_thich: "Việc xây dựng gia đình XHCN là trách nhiệm của toàn xã hội, đòi hỏi sự kết hợp và phát triển đồng bộ, nền tảng và bền vững giữa gia đình, nhà trường và xã hội. "
    },
    {
        cau: "Câu 25: (CLO7.2) Các mối quan hệ cơ bản của gia đình gồm ?",
        options: ["A. Quan hệ hôn nhân, huyết thống.", "B. Quan hệ bạn bè.", "C. Quan hệ công việc.", "D. Quan hệ tầng lớp giai cấp."],
        dap_an: "A",
        giai_thich: "Các mối quan hệ cơ bản là hôn nhân, huyết thống và nuôi dưỡng. "
    },
    {
        cau: "Câu 26: (CLO7.2) Theo quan niệm của Chủ nghĩa Mác - Lênin, gia đình là gì?",
        options: ["A. Gia đình là một hình thức cộng đồng xã hội đặc biệt;", "B. Được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng;", "C. Những quy định về quyền và nghĩa vụ của các thành viên trong gia đình", "D. Cả A, B, C"],
        dap_an: "D",
        giai_thich: "Đáp án D là tổng hợp đầy đủ các nội dung cơ bản trong định nghĩa về gia đình theo Chủ nghĩa Mác - Lênin. "
    },
    {
        cau: "Câu 27: (CLO7.2) Theo quan niệm của Chủ nghĩa Mác - Lênin, cơ sở hình thành gia đình gồm?",
        options: ["A. Quan hệ nuôi dưỡng và quan hệ huyết thống", "B. Quan hệ hôn nhân và quan hệ huyết thống", "C. Quan hệ nuôi dưỡng và quan hệ hôn nhân", "D. Quan hệ nuôi dưỡng, quan hệ hôn nhân và quan hệ huyết thống"],
        dap_an: "D",
        giai_thich: "Ba mối quan hệ nền tảng của gia đình: nuôi dưỡng, hôn nhân và huyết thống. "
    },
    {
        cau: "Câu 28: (CLO7.2) Gia đình Việt Nam ngày nay có thể được coi là “gia đình quá độ” trong bước chuyển biến từ đâu ?",
        options: ["A. Xã hội tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa", "B. Xã hội chiếm hữu nô lệ sang tư bản chủ nghĩa", "C. Xã hội công xã nguyên thủy sang chiếm hữu nô lệ", "D. Xã hội nông nghiệp cổ truyền sang xã hội công nghiệp hiện đại."],
        dap_an: "D",
        giai_thich: "Gia đình Việt Nam đang biến đổi do tác động của CNH, HĐH, từ mô hình gia đình cổ truyền (nông nghiệp) sang mô hình gia đình hiện đại (công nghiệp). "
    },
    {
        cau: "Câu 29: (CLO7.2) Quan hệ nào sau đây là cơ sở, nền tảng hình thành nên các mối quan hệ khác trong gia đình?",
        options: ["A. Quan hệ huyết thống", "B. Quan hệ nuôi dưỡng", "C. Quan hệ họ hàng", "D. Quan hệ hôn nhân"],
        dap_an: "D",
        giai_thich: "Quan hệ hôn nhân là cơ sở nền tảng, tạo ra sự liên kết đầu tiên và cơ bản nhất cho các mối quan hệ còn lại. "
    },
    {
        cau: "Câu 30: (CLO7.2) Chức năng nào của gia đình mà các đơn vị kinh tế khác không có được, đơn vị duy nhất tham gia vào quá trình sản xuất và tái sản xuất ra sức lao động cho xã hội?",
        options: ["A. Kinh tế và tổ chức tiêu dùng", "B. Tái sản xuất ra con người", "C. Nuôi dưỡng, giáo dục", "D. Duy trì tình cảm"],
        dap_an: "B",
        giai_thich: "Chức năng tái sản xuất ra con người là chức năng đặc thù, trực tiếp cung cấp nguồn nhân lực (sức lao động) cho xã hội. "
    },
    {
        cau: "Câu 31: (CLO7.2) Quan điểm nào sau đây là đúng nhất?",
        options: ["A. Ông bà trực tiếp giáo dục trẻ", "B. Ông bà, bố mẹ cùng giáo dục trẻ", "C. Bố mẹ trực tiếp nuôi dưỡng và giáo dục trẻ", "D. Chỉ cần sự giáo dục trẻ của Nhà trường"],
        dap_an: "C",
        giai_thich: "Bố mẹ trực tiếp nuôi dưỡng và giáo dục trẻ là quan điểm đúng nhất về trách nhiệm cơ bản và trực tiếp của cha mẹ theo pháp luật và đạo đức gia đình. "
    },
    {
        cau: "Câu 32: (CLO7.2) Hiện nay, quy mô gia đình ngày nay tồn tại xu hướng ra sao ?",
        options: ["A. Thu nhỏ hơn so với trước kia, số thành viên trong gia đình trở nên ít đi.", "B. Gia đình xuất hiện nhiều thế hệ cùng tồn tại", "C. Chỉ có gia đình gồm bố, mẹ đơn thân", "D. Gia đình không có hôn nhân hợp pháp là chủ yếu"],
        dap_an: "A",
        giai_thich: "Xu hướng phổ biến của gia đình hiện đại (gia đình quá độ) là thu nhỏ quy mô, chuyển từ gia đình lớn sang gia đình hạt nhân, số thành viên ít đi. "
    }
];
// --- DỮ LIỆU ĐỀ SỐ 19 ---
const de19 = [
    {
        cau: "Câu 1: Trong chủ nghĩa xã hội vấn đề có vị trí đặc biệt quan trọng và phải tuân thủ nguyên tắc: “Xóa bỏ tình trạng người bóc lột người thì tình trạng dân tộc này bóc lột dân tộc khác cũng bị xóa bỏ”, đó là vấn đề nào?",
        options: ["A. Vấn đề giai cấp và dân tộc", "B. Vấn đề kinh tế", "C. Vấn đề văn hóa", "D. Vấn đề xã hội"],
        dap_an: "A",
        giai_thich: "Nguyên tắc \"xóa bỏ bóc lột người/dân tộc\" thể hiện sự thống nhất giữa mục tiêu giải phóng giai cấp (xóa bỏ bóc lột) và giải phóng dân tộc (xóa bỏ áp bức dân tộc)."
    },
    {
        cau: "Câu 2: Trong giai đoạn chủ nghĩa xã hội, yếu tố nào là nền tảng tinh thần của xã hội, mục tiêu phát triển xã hội và là trọng tâm phát triển kinh tế?",
        options: ["A. Văn hóa", "B. Chính trị", "C. Khoa học", "D. Tinh thần"],
        dap_an: "A",
        giai_thich: "Văn hóa được Đảng ta xác định là nền tảng tinh thần của xã hội, là mục tiêu và động lực của sự phát triển."
    },
    {
        cau: "Câu 3: Điền từ vào chỗ trống để hoàn thiện luận điểm của C.Mác: \"Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng từ xã hội nọ sang xã hội kiA. Thích ứng với thời kỳ ấy là một thời kỳ quá độ........, và nhà nước của thời kỳ ấy không thể là cái gì khác hơn là nền chuyên chính cách mạng của giai cấp vô sản\"?",
        options: ["A. Chính trị", "B. Kinh tế", "C. Văn hóa", "D. Xã hội"],
        dap_an: "A",
        giai_thich: "Luận điểm này của C. Mác trong Phê phán Cương lĩnh Gôta nói về thời kỳ quá độ chính trị (chuyên chính vô sản)."
    },
    {
        cau: "Câu 4: Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là tạo ra sự biến đổi về chất của xã hội trên lĩnh vực nào?",
        options: ["A. Kinh tế", "B. Chính trị", "C. Xã hội", "D. Tất cả các lĩnh vực"],
        dap_an: "D",
        giai_thich: "Quá độ lên CNXH là quá trình cải tạo và biến đổi xã hội một cách toàn diện trên tất cả các lĩnh vực (kinh tế, chính trị, văn hóa, xã hội)."
    },
    {
        cau: "Câu 5: Nội dung nào sau đây không phải nhiệm vụ cơ bản trong lĩnh vực kinh tế của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: ["A. Sắp xếp, bố trí lại các lực lượng sản xuất hiện có", "B. Cải tạo quan hệ sản xuất cũ", "C. Xây dựng quan hệ sản xuất mới...", "D. Cải cách nền hành chính ngày càng tinh gọn, hiệu quả"],
        dap_an: "D",
        giai_thich: "Các nhiệm vụ A, B, C thuộc lĩnh vực kinh tế. Cải cách nền hành chính (D) thuộc lĩnh vực chính trị và quản lý nhà nước."
    },
    {
        cau: "Câu 6: Một trong những đóng góp khoa học có ý nghĩa phương pháp luận của học thuyết hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
        options: ["A. Chỉ ra tính tất yếu sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa lên hình thái kinh tế - xã hội cộng sản chủ nghĩa", "B. Chỉ ra tính tất yếu của sự nghiệp đổi mới, trước hết là đổi mới tư duy kinh tế", "C. Đề ra chính sách kinh tế mới", "D. Lý luận về học thuyết giá trị thặng dư"],
        dap_an: "A",
        giai_thich: "Học thuyết hình thái kinh tế - xã hội là phát kiến vĩ đại của Mác, chỉ ra tính tất yếu của sự vận động lịch sử và sự thay thế các hình thái kinh tế - xã hội."
    },
    {
        cau: "Câu 7: Cơ sở xác lập lý luận về các hình thái kinh tế - xã hội là gì?",
        options: ["A. Chủ nghĩa duy vật lịch sử", "B. Chủ nghĩa duy vật", "C. Học thuyết giá trị thặng dư", "D. Thế giới quan duy vật"],
        dap_an: "A",
        giai_thich: "Chủ nghĩa duy vật lịch sử là phát kiến vĩ đại thứ nhất của Mác và Ăngghen, là cơ sở phương pháp luận cho việc phân tích xã hội và xác lập lý luận về các hình thái kinh tế - xã hội."
    },
    {
        cau: "Câu 8: Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực chính trị là gì?",
        options: ["A. Không còn tồn tại giai cấp", "B. Kết cấu giai cấp của xã hội thuần nhất", "C. Các giai cấp trong xã hội tồn tại với những lợi ích không còn đối kháng nhau", "D. Kết cấu giai cấp của xã hội đa dạng, phức tạp"],
        dap_an: "D",
        giai_thich: "Trong thời kỳ quá độ, do sự tồn tại của nền kinh tế nhiều thành phần, kết cấu giai cấp trong xã hội vẫn còn đa dạng, phức tạp."
    },
    {
        cau: "Câu 9: Tiền đề và điều kiện quan trọng cho sự ra đời của hình thái kinh tế – xã hội cộng sản chủ nghĩa?",
        options: ["A. Sự phát triển của lực lượng sản xuất và sự trưởng thành thực sự của giai cấp công nhân", "B. Sự lớn mạnh của giai cấp vô sản", "C. Giai cấp công nhân trưởng thành và trở thành một lực lượng chính trị độc lập", "D. Sự phát triển của quan hệ sản xuất tư bản chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Sự sụp đổ của CNTB và sự ra đời của CNXH đòi hỏi hai tiền đề: lực lượng sản xuất phát triển (tiền đề vật chất) và sự trưởng thành của giai cấp công nhân (tiền đề xã hội)."
    },
    {
        cau: "Câu 10: Theo quan điểm của chủ nghĩa Mác - Lênin, nhà nước xã hội chủ nghĩa mang bản chất giai cấp công nhân được hiểu như thế nào?",
        options: ["A. Là một công cụ để bảo vệ lợi ích của toàn dân", "B. Là một công cụ để bảo vệ lợi ích của dân tộc", "C. Là một công cụ để bảo vệ lợi ích của nhân dân lao động bị áp bức", "D. Là một công cụ để bảo vệ lợi ích của giai cấp công nhân"],
        dap_an: "D",
        giai_thich: "Bản chất giai cấp công nhân của Nhà nước XHCN thể hiện ở việc nó là công cụ để bảo vệ lợi ích của giai cấp công nhân và nhân dân lao động (tức giai cấp lãnh đạo)."
    },
    {
        cau: "Câu 11: Theo CNXHKH, tiền đề kinh tế - xã hội dẫn tới sự sụp đổ không tránh khỏi của phương thức sản xuất tư bản chủ nghĩa là gì?",
        options: ["A. Sự phát triển về lực lượng sản xuất và sự trưởng thành của giai cấp công nhân", "B. Sự ra đời của Đảng cộng sản", "C. Liên minh công - nông bền chặt", "D. Lý luận khoa học soi đường"],
        dap_an: "A",
        giai_thich: "Sự phát triển của lực lượng sản xuất (mâu thuẫn với quan hệ sản xuất) và sự trưởng thành của giai cấp công nhân là tiền đề khách quan, kinh tế - xã hội dẫn đến sự sụp đổ của CNTB."
    },
    {
        cau: "Câu 12: Cuộc cách mạng vô sản là cuộc cách mạng của giai cấp nào?",
        options: ["A. Giai cấp tư sản và nhân dân lao động", "B. Giai cấp nông dân và tri thức", "C. Giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của đảng công sản", "D. Giai cấp địa chủ và nông dân"],
        dap_an: "C",
        giai_thich: "Cách mạng vô sản là cuộc cách mạng do giai cấp công nhân lãnh đạo (thông qua Đảng Cộng sản) nhằm giải phóng nhân dân lao động khỏi áp bức, bóc lột."
    },
    {
        cau: "Câu 13: Đặc trưng về phương diện kinh tế của Chủ nghĩa xã hội là gì?",
        options: ["A. Chủ nghĩa xã hội có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.", "B. Chủ nghĩa xã hội có một nền sản xuất công nghiệp hiện đại", "C. Chủ nghĩa xã hội có cách thức tổ chức lao động tiên tiến", "D. Chủ nghĩa xã hội có kỷ luật lao động mới với năng suất cao"],
        dap_an: "A",
        giai_thich: "Đặc trưng kinh tế cốt lõi của CNXH là nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu."
    },
    {
        cau: "Câu 14: Theo quan điểm của của CNXHKH, có những hình thức quá độ nào từ CNTB lên CNCS?",
        options: ["A. Quá đô trực tiếp và quá độ gián tiếp", "B. Quá đô trung gian", "C. Quá đô trực tiếp", "D. Không qua hình thức quá đô"],
        dap_an: "A",
        giai_thich: "CNXHKH phân chia thời kỳ quá độ thành hai hình thức cơ bản: quá độ trực tiếp (ở các nước CNTB phát triển) và quá độ gián tiếp (ở các nước tiền TBCN)."
    },
    {
        cau: "Câu 15: Theo quan điểm của của CNXHKH, hình thái kinh tế - xã hội phát triển cao nhất, kết tinh của văn minh nhân loại là?",
        options: ["A. Tư bản chủ nghĩa", "B. Cộng sản chủ nghĩa", "C. Xã hội chủ nghĩa", "D. Thời kỳ quá độ"],
        dap_an: "B",
        giai_thich: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa (bao gồm giai đoạn thấp là CNXH và giai đoạn cao là CNCS) là hình thái phát triển cao nhất của lịch sử loài người."
    },
    {
        cau: "Câu 16: Theo quan điểm của của CNHKH, đặc trưng thể hiện thuộc tính bản chất của CNXH?",
        options: ["A. Từng bước xóa bỏ chế độ sở hữu tư bản chủ nghĩa đồng thời thiết lập chế độ công hữu về các tư liệu sản xuất chủ yếu", "B. Chủ nghĩa xã hội là xã hội do nhân dân lao động làm chủ", "C. Tạo ra cách thức tổ chức và kỷ luật lao động mới", "D. Mục tiêu cao nhất của chủ nghĩa xã hội là giải phóng con người toàn diện"],
        dap_an: "D",
        giai_thich: "Mục tiêu cao nhất của chủ nghĩa xã hội là giải phóng con người (giải phóng toàn diện về chính trị, kinh tế, văn hóa)."
    },
    {
        cau: "Câu 17: Theo quan điểm của của CNXHKH, nhà nước xã hội chủ nghĩa mang bản chất giai cấp công nhân được hiểu như thế nào?",
        options: ["A. Là một công cụ để bảo vệ lợi ích của toàn dân", "B. Là một công cụ để bảo vệ lợi ích của dân tộc", "C. Là một công cụ để bảo vệ lợi ích của nhân dân lao động bị áp bức", "D. Là đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động"],
        dap_an: "D",
        giai_thich: "Nhà nước XHCN mang bản chất GCCN, là đại biểu cho lợi ích và quyền lực của GCCN và nhân dân lao động, thông qua việc đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động."
    },
    {
        cau: "Câu 18: Các danh từ \"quá độ đặc biệt\", \"quá độ đặc biệt của đặc biệt\" do ai đưa ra?",
        options: ["A. C. Mác", "B. Ph. Ăngghen", "C. V.I.Lênin", "D. Hồ Chí Minh"],
        dap_an: "C",
        giai_thich: "Khái niệm về các hình thức quá độ từ kém phát triển lên CNXH, bao gồm cả những hình thức đặc biệt (quá độ gián tiếp), được V.I.Lênin luận giải và phát triển."
    },
    {
        cau: "Câu 19: Theo Hồ Chí Minh, đặc điểm to nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?",
        options: ["A. Nhiều thành phần xã hội đan xen tồn tại", "B. Lực lượng sản xuất chưa phát triển", "C. Năng xuất lao động thấp", "D. Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa"],
        dap_an: "D",
        giai_thich: "Chủ tịch Hồ Chí Minh và Đảng ta xác định đặc điểm to nhất của Việt Nam là tiến thẳng lên chủ nghĩa xã hội, bỏ qua chế độ tư bản chủ nghĩa."
    },
    {
        cau: "Câu 20: Nội dung nào còn thiếu trong quan điểm sau: \"Xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng là một xã hội dân giàu, nước mạnh......\" (Văn Kiện Đại hội Đảng lần thứ XI)?",
        options: ["A. Công bằng, dân chủ, văn minh", "B. Dân chủ, công bằng, văn minh", "C. Văn minh, dân chủ, công bằng", "D. Công bằng, văn minh, dân chủ"],
        dap_an: "B",
        giai_thich: "Đặc trưng tổng quát về mục tiêu của CNXH Việt Nam là: \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\"."
    },
    {
        cau: "Câu 21: Ai là người đưa ra khẩu hiêu: “Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại”?",
        options: ["A. C.Mác", "B. Ph.Ăngghen", "C. V.I.Lênin", "D. Hồ Chí Minh"],
        dap_an: "C",
        giai_thich: "Khẩu hiệu này là sự bổ sung và phát triển sáng tạo của V.I.Lênin (thêm \"và các dân tộc bị áp bức\") để phù hợp với bối cảnh chủ nghĩa đế quốc."
    },
    {
        cau: "Câu 22: Tác phẩm nào của Lênin đã đưa ra nội dung có tính nguyên tắc như sau: “Các dân tộc hoàn toàn bình đẳng; các dân tộc được quyền tự quyết; liên hiệp công nhân tất cả các dân tộc lại”?",
        options: ["A. Làm gì", "B. Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán", "C. Nhà nước và cách mạng", "D. Cương lĩnh về vấn đề dân tộc"],
        dap_an: "D",
        giai_thich: "Ba nguyên tắc này hợp thành Cương lĩnh về vấn đề dân tộc của V.I.Lênin."
    },
    {
        cau: "Câu 23: Theo quan điểm của của CNXHKH, từ chủ nghĩa tư bản lên chủ nghĩa xã hội tất yếu phải trải qua thời kỳ nào?",
        options: ["A. Thời kỳ phát triển cao của CNXH", "B. Thời kỳ phát triển thấp của CNXH", "C. Thời kỳ chuyển biến cách mạng xã hội", "D. Thời kỳ quá độ chính trị"],
        dap_an: "C",
        giai_thich: "Việc chuyển đổi từ CNTB lên CNXH/CNCS không diễn ra tức thời mà tất yếu phải trải qua thời kỳ chuyển biến cách mạng xã hội (thời kỳ quá độ)."
    },
    {
        cau: "Câu 24: Theo quan điểm của của CNXHKH, việc thay thế xã hội bất công, bóc lột bằng xã hội mới tốt đẹp một cách tức thì theo ý muốn chủ quan của con người bởi vì?",
        options: ["A. Không còn giai cấp công nhân", "B. Không còn áp bức giai cấp", "C. Cách mạng công nghiệp 4.0", "D. Giai cấp vô sản cần phải có thời gian để cải tạo xã hội cũ..."],
        dap_an: "D",
        giai_thich: "Không thể thay thế xã hội tức thì vì GCCN và nhân dân lao động cần thời gian để cải tạo triệt để xã hội cũ và xây dựng nền tảng vật chất, kỹ thuật, tinh thần cho CNXH."
    },
    {
        cau: "Câu 25: Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực kinh tế là gì?",
        options: ["A. Lực lượng sản xuất ở nhiều trình độ khác nhau", "B. Cơ sở vật chất kỹ thuật hiện đại", "C. Quan hệ sản xuất dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu", "D. Tồn tại một nền kinh tế nhiều thành phần, trong đó có thành phần đối lập"],
        dap_an: "D",
        giai_thich: "Đặc điểm kinh tế nổi bật của thời kỳ quá độ (nhất là ở các nước tiến lên từ lạc hậu) là tồn tại một nền kinh tế nhiều thành phần, bao gồm cả những thành phần đối lập."
    },
    {
        cau: "Câu 26: Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực chính trị là gì?",
        options: ["A. Không còn tồn tại giai cấp", "B. Kết cấu giai cấp của xã hội thuần nhất", "C. Các giai cấp trong xã hội tồn tại với những lợi ích không còn đối kháng nhau", "D. Giai cấp công nhân nắm và sử dụng quyền lực nhà nước trấn áp giai cấp tư sản, tiến hành xây dựng thành công chủ nghĩa xã hội"],
        dap_an: "D",
        giai_thich: "Về chính trị, đặc điểm cơ bản của thời kỳ quá độ là Giai cấp công nhân nắm và sử dụng quyền lực nhà nước (chuyên chính vô sản)."
    },
    {
        cau: "Câu 27: Nội dung nào sau đây không là đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực tư tưởng-văn hóa?",
        options: ["A. Từng bước xây dựng văn hóa vô sản, nền văn hóa mới xã hội chủ nghĩa", "B. Tiếp thu giá trị văn hóa dân tộc, tinh hoa văn hóa nhân loại", "C. Đảm bảo đáp ứng nhu cầu văn hóa - tinh thần ngày càng cao của nhân dân", "D. Có mối quan hệ hợp tác, hữu nghị với tất cả các chính đảng trên thế giới"],
        dap_an: "D",
        giai_thich: "Đặc điểm tư tưởng-văn hóa tập trung vào nội bộ xã hội (A, B, C). Mối quan hệ hợp tác, hữu nghị với các chính đảng (D) thuộc lĩnh vực đối ngoại/chính trị."
    },
    {
        cau: "Câu 28: Nội dung nào sau đây không phải là đặc điểm của Việt Nam khi tiến lên chủ nghĩa xã hội?",
        options: ["A. Xuất phát từ một xã hội vốn là thuộc địa, nửa phong kiến, lực lượng sản xuất rất thấp", "B. Cuộc cách mạng khoa học và công nghệ hiện đại đang diễn ra mạnh mẽ", "C. Thời đại ngày nay vẫn là thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội", "D. Có nền tảng khoa học kỹ thuật hiện đại và sự giúp đỡ nhiệt tình từ các nước anh em"],
        dap_an: "D",
        giai_thich: "Việt Nam tiến lên CNXH từ nền kinh tế kém phát triển, lực lượng sản xuất rất thấp (A), do đó, việc nói Có nền tảng khoa học kỹ thuật hiện đại (D) là sai với thực tế lịch sử Việt Nam."
    },
    {
        cau: "Câu 29: Trong giai đoạn hiện nay, thực hiện bước quá độ lên chủ nghĩa xã hội ở Việt Nam có yếu tố khó khăn nào?",
        options: ["A. Cách mạng công nghiệp lần thứ tư", "B. Xu thế \"toàn cầu hóa\"", "C. Chính sách cởi mở của Đảng và Nhà nước Việt Nam trong hội nhập quốc tế", "D. Xung đột trong khu vực và trên thế giới có diễn biến phức tạp, khó lường"],
        dap_an: "D",
        giai_thich: "Các yếu tố A, B, C là những cơ hội hoặc điều kiện thuận lợi. Khó khăn lớn nhất là xung đột và diễn biến phức tạp, khó lường của tình hình thế giới, đe dọa hòa bình và ổn định."
    },
    {
        cau: "Câu 30: Một trong những đặc trưng của chủ nghĩa xã hội mà Đảng xác định trong Văn Kiện Đại hội Đảng lần thứ XI là gì?",
        options: ["A. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất phát triển tiến bộ", "B. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp", "C. Có nền kinh tế phát triển cao dựa trên quan hệ sản xuất hiện đại", "D. Có nền văn phát triển tiến bô, phù hợp"],
        dap_an: "B",
        giai_thich: "Đặc trưng về kinh tế của CNXH Việt Nam được xác định là Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp."
    },
    {
        cau: "Câu 31: Nội dung nào sau đây là một trong những đặc trưng của chủ nghĩa xã hội mà Đảng công sản Việt Nam xác định trong Văn Kiện Đại hội Đảng lần thứ XI?",
        options: ["A. Do giai cấp tư sản làm chủ", "B. Do nhân dân làm chủ", "C. Do tầng lớp tri thức làm chủ", "D. Do giai cấp công nhân làm chủ"],
        dap_an: "B",
        giai_thich: "Đặc trưng cốt lõi về chính trị là Do nhân dân làm chủ (thực hiện dân chủ XHCN)."
    },
    {
        cau: "Câu 32: Đâu là đặc trưng khái quát nhất, bao trùm hệ mục tiêu cần đạt tới của chủ nghĩa xã hội ở Việt Nam?",
        options: ["A. Dân giàu, nước mạnh, công bằng, văn minh", "B. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "C. Dân giàu, nước mạnh, văn minh", "D. Dân giàu, dân chủ, văn minh"],
        dap_an: "B",
        giai_thich: "Hệ mục tiêu xuyên suốt và khái quát nhất là Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
        cau: "Câu 33: Những tiền đề vật chất quan trọng cho sự ra đời của chủ nghĩa xã hội?",
        options: ["A. Sự phát triển của lực lượng sản xuất và sự hình thành giai cấp vô sản cách mạng", "B. Sự lớn mạnh của giai cấp vô sản và sự phát triển của quan hệ sản xuất tư bản chủ nghĩa", "C. Giai cấp công nhân trưởng thành và trở thành một lực lượng chính trị độc lập", "D. Sản xuất vật chất phát triển tạo ra một lượng hàng hóa khổng lồ"],
        dap_an: "A",
        giai_thich: "Tiền đề quan trọng nhất là sự phát triển của lực lượng sản xuất (vật chất) và sự hình thành giai cấp vô sản cách mạng (xã hội)."
    },
    {
        cau: "Câu 34: Theo C.Mác và Ph.Ăngghen, tiền đề để xóa bỏ phương thức sản xuất tư bản chủ nghĩa là gì?",
        options: ["A. Sự ra đời và phát triển của giai cấp công nhân", "B. Sự ra đời của Đảng cộng sản", "C. Liên minh công - nông bền chặt", "D. Lý luận khoa học soi đường"],
        dap_an: "A",
        giai_thich: "Giai cấp công nhân là lực lượng xã hội được sinh ra từ chính CNTB và mang sứ mệnh xóa bỏ phương thức sản xuất này."
    },
    {
        cau: "Câu 35: Theo V.I.Lênin, cuộc cách mạng xã hội chủ nghĩa về thực chất là cuộc cách mạng trong lĩnh vực nào?",
        options: ["A. Chính trị", "B. Xã hội", "C. Kinh tế", "D. Văn hóa"],
        dap_an: "A",
        giai_thich: "Theo nghĩa hẹp, CM XHCN là cuộc cách mạng chính trị, nhằm giành và thiết lập chuyên chính vô sản, sau đó mới tiến hành cải tạo các lĩnh vực khác."
    },
    {
        cau: "Câu 36: C.Mác và Ph.Ăngghen đã đưa ra dự báo khoa học về hai giai đoạn phát triển cao thấp khác nhau của hình thái kinh tế xã hội cộng sản chủ nghĩa, đó là gì?",
        options: ["A. Giai đoạn thấp của xã hội cộng sản và giai đoạn cao hơn của xã hội cộng sản", "B. Thời kỳ quá độ lên chủ nghĩa xã hội và chủ nghĩa xã hội", "C. Thời kỳ quá độ lên chủ nghĩa xã hội và chủ nghĩa cộng sản", "D. Chủ nghĩa cộng sản và cộng sản chủ nghĩa"],
        dap_an: "A",
        giai_thich: "Hai giai đoạn này là giai đoạn thấp (Chủ nghĩa xã hội) và giai đoạn cao hơn (Chủ nghĩa cộng sản) của hình thái kinh tế - xã hội cộng sản chủ nghĩa."
    },
    {
        cau: "Câu 37: Theo quan điểm của chủ nghĩa Mác - Lênin, hình thái kinh tế - xã hội phát triển cao nhất, kết tinh của văn minh nhân loại là?",
        options: ["A. Tư bản chủ nghĩa", "B. Cộng sản chủ nghĩa", "C. Xã hội chủ nghĩa", "D. Xã hội chủ nghĩa và cộng sản chủ nghĩa"],
        dap_an: "B",
        giai_thich: "Cộng sản chủ nghĩa là hình thái kinh tế - xã hội phát triển cao nhất, sau khi đã trải qua giai đoạn CNXH."
    },
    {
        cau: "Câu 38: Theo V.I.Lênin, cơ sở nào để trong giai đoạn thấp của xã hội cộng sản chủ nghĩa, tình trạng người áp bức bóc lột người không còn nữa?",
        options: ["A. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về xã hội", "B. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về Đảng cộng sản", "C. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về giai cấp công nhân và nhân dân lao động", "D. Những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về toàn dân"],
        dap_an: "A",
        giai_thich: "Cơ sở để xóa bỏ bóc lột trong CNXH là việc những tư liệu sản xuất chủ yếu đã được sở hữu thuộc về xã hội (chế độ công hữu)."
    }
];
const allDecks = {
    'de1': { name: "Đề số 1", data: de1 },
    'de2': { name: "Đề số 2", data: de2 },
    'de3': { name: "Đề số 3", data: de3 },
    'de4': { name: "Đề số 4", data: de4 },
    'de5': { name: "Đề số 5", data: de5 },
    'de6': { name: "Đề số 6", data: de6 },
    'de7': { name: "Đề số 7", data: de7 },
    'de8': { name: "Đề số 8", data: de8 },
    'de9': { name: "Đề số 9", data: de9 },
    'de10': { name: "Đề số 10", data: de10 },
    'de11': { name: "Đề số 11", data: de11 },
    'de12': { name: "Đề số 12", data: de12 },
    'de13': { name: "Đề số 13", data: de13 },
    'de14': { name: "Đề số 14", data: de14 },
    'de15': { name: "Đề số 15", data: de15 },
    'de16': { name: "Đề số 16", data: de16 },
    'de17': { name: "Đề số 17", data: de17 },
    'de18': { name: "Đề số 18", data: de18 },
    'de19': { name: "Đề số 19", data: de19 },
};
const allQuestions = [...de1, ...de2, ...de3, ...de4, ...de5, ...de6, ...de7, ...de8, ...de9, ...de10, ...de11, ...de12, ...de13, ...de14, ...de15, ...de16, ...de17, ...de18, ...de19]; 
