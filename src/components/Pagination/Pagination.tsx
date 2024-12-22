import clsx from "clsx";
import styles from "./Pagination.module.css";

export default function Pagination({
	totalPages,
	setPage,
	currentPage,
}: {
	totalPages: number;
	setPage: (page: number) => any;
	currentPage: number;
}) {
	let pages = [];
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	function previousPage() {
		setPage((currentPage -= 1));
	}

	function nextPage() {
		setPage((currentPage += 1));
	}

	if(pages.length > 1) return (
		<div className={styles.pagination}>
			<button
				className={clsx(styles.sideBtn, {
					[styles.hidden]: currentPage <= 1,
				})}
				onClick={() => previousPage()}
			>
				Previous
			</button>

			<div className={styles.pagesContainer}>
				{pages.map((pageNumber) => (
					<button
						key={pageNumber}
						className={clsx(styles.numberBtn, {
							[styles.currentNumber]: pageNumber == currentPage,
						})}
						onClick={() => setPage(pageNumber)}
					>
						{pageNumber}
					</button>
				))}
			</div>

			<button
				className={clsx(styles.sideBtn, {
					[styles.hidden]: currentPage >= pages.length,
				})}
				onClick={() => nextPage()}
			>
				Next
			</button>
		</div>
	)
}
